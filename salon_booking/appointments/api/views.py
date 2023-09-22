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
        data['employee'] = obj.employee
        data['customer'] = obj.customer
        data['salon'] = obj.salon
        data.update(updated_data)

        serializer.save(**validated_appointment(data))


def validated_appointment(data):
    end = data['start']
    for i in data['services']:
        end += i.duration

    data['end'] = end
    employee = data['employee']
    employee_services = employee.services.all()

    if employee.salon != data['salon']:
        raise ValidationError(_("Employee is not valid"))

    for i in data['services']:

        if i.salon != data['salon']:
            raise ValidationError(_("Service is not valid"))

        if i not in employee_services:
            raise ValidationError(_("The selected employee is not authorized for the chosen service"))

    if Appointment.objects.filter(employee=employee, end__gt=data['start'], start__lt=data['end']).exists():
        raise ValidationError(
            _("The employee is already busy with another appointment during this time slot. Please choose a different time or another available employee"))

    start_time = data['start'].time()
    end_time = data['end'].time()
    weekday = data['start'].weekday()
    work_day = EmployeeWorkDay.objects.get(employee=employee, weekday=weekday)
    if not work_day.work:
        raise ValidationError(_("The selected day is not a working day for the chosen employee"))

    work_ranges = work_day.work_ranges.all()
    for work_range in work_ranges:
        if work_range.from_hour <= start_time < work_range.to_hour and work_range.from_hour < end_time <= work_range.to_hour:
            break
        else:
            raise ValidationError(
                _("The selected time is not within the employee's working hours for this day. Please choose a different time"))

    return data
