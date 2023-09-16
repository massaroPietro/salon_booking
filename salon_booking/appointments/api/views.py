from datetime import datetime
from time import sleep

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
        salon = self.get_object()
        data = serializer.validated_data

        if appointment_is_valid(data, salon):

            services = data.get('services', [])
            end = data['start']
            for i in services:
                end += i.duration

            serializer.save(salon=salon, customer=self.request.user, end=end)


class AppointmentRUDAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = AppointmentSerializer
    permission_classes = [IsSalonOwnerOrCustomer]
    queryset = Appointment.objects.all()

    def perform_update(self, serializer):
        data = serializer.validated_data
        salon = self.get_object().salon
        if appointment_is_valid(data, salon):

            services = data.get('services', self.get_object().services)
            end = data['start']
            for i in services:
                end += i.duration

            serializer.save(end=end)


def appointment_is_valid(appointment, salon):
    employee = appointment.get('employee', None)

    if employee and employee.salon != salon:
        raise ValidationError(_("Employee is not valid"))

    services = appointment.get('services', [])
    for i in services:
        if i.salon != salon:
            raise ValidationError(_("Service is not valid"))

    return True
