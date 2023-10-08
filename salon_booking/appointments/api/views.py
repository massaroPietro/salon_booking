from datetime import datetime
from django.forms.models import model_to_dict
from django.utils import timezone
from rest_framework import generics
from rest_framework.exceptions import ValidationError
from rest_framework.generics import get_object_or_404

from .permissions import IsOwnerOrCreateOnly, IsSalonOwnerOrCustomer
from .serializers import *
from ..models import *
from django.utils.translation import gettext as _


class AppointmentListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = AppointmentSerializer
    permission_classes = [IsOwnerOrCreateOnly]

    def get_object(self):
        slug = self.kwargs['slug']
        return get_object_or_404(Salon, slug=slug)

    def get_queryset(self):
        salon = self.get_object()
        if self.request.user == salon.owner:
            queryset = salon.appointments.all()
        else:
            queryset = Appointment.objects.filter(employee__user=self.request.user, salon=salon)

        start_date_param = self.request.query_params.get('start')
        end_date_param = self.request.query_params.get('end')

        if start_date_param and end_date_param:
            try:
                start_date = datetime.fromtimestamp(int(start_date_param) / 1000, tz=timezone.utc)
                end_date = datetime.fromtimestamp(int(end_date_param) / 1000, tz=timezone.utc)
                queryset = queryset.filter(start__gte=start_date, start__lte=end_date)
            except ValueError:
                pass

        return queryset

    def perform_create(self, serializer):
        data = serializer.validated_data

        data['salon'] = self.get_object()
        data['customer'] = self.request.user

        serializer.save(**validated_appointment(data))


class AppointmentRUDAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = AppointmentSerializer
    permission_classes = [IsSalonOwnerOrCustomer]
    queryset = Appointment.objects.all()

    def perform_update(self, serializer):
        updated_data = serializer.validated_data
        obj = self.get_object()

        data = model_to_dict(obj)
        data['id'] = obj.pk
        data['employee'] = obj.employee
        data['customer'] = obj.customer
        data['salon'] = obj.salon
        data.update(updated_data)

        serializer.save(**validated_appointment(data))


def validated_appointment(data):
    # CALCOLO DATA FINE
    data['start'] = data['start'].replace(second=0)
    end = data['start']
    for i in data['services']:
        end += i.duration

    data['end'] = end

    employee = data['employee']
    employee_services = employee.services.all()

    # Controllo se l'employee selezionato fa parte del salone
    if employee.salon != data['salon']:
        raise ValidationError(_("Employee is not valid"))

    # Controllo se i servizi selezionati sono validi
    for i in data['services']:

        if i.salon != data['salon']:
            raise ValidationError(_("Service is not valid"))

        if i not in employee_services:
            raise ValidationError(_("The selected employee is not authorized for the chosen service"))

    # Controllo se l'orario dell'appuntamento in base al dipendente è disponibile
    query = Appointment.objects.filter(
        employee=employee,
        end__gt=data['start'],
        start__lt=data['end']
    )

    if 'id' in data:
        query = query.exclude(id=data['id'])

    if query.exists():
        raise ValidationError(
            _("The employee is already busy with another appointment during this time slot. Please choose a different time or another available employee"))

    ################################################################
    # Controllo che la data e orario selezionato è lavorativo per il dipendente
    start_time = data['start'].time()
    end_time = data['end'].time()
    weekday = data['start'].weekday()
    work_day = EmployeeWorkDay.objects.get(employee=employee, weekday=weekday)
    if not work_day.work:
        raise ValidationError(_("The selected day is not a working day for the chosen employee"))

    work_ranges = work_day.work_ranges.all()

    valid_time = False
    for work_range in work_ranges:
        if work_range.from_hour <= start_time < work_range.to_hour and work_range.from_hour < end_time <= work_range.to_hour:
            valid_time = True
            break
    if not valid_time:
        raise ValidationError(
            _("The selected time is not within the employee's working hours for this day. Please choose a different time"))

    #########################################

    # Controllo l'orario in base allo slot dei settings del salone

    settings = get_object_or_404(SalonSettings, salon=data['salon'])
    start_time_minutes = data['start'].minute + data['start'].hour * 60
    slot_minutes = settings.slot_time.total_seconds() // 60
    if start_time_minutes % slot_minutes != 0:
        raise ValidationError(
            _(f'The time entered is invalid. The lounge only accepts reservations in {slot_minutes} minute slots.'))

    return data
