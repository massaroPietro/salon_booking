from rest_framework import generics
from rest_framework.generics import get_object_or_404

from .permissions import IsOwnerOrCreateOnly, IsSalonOwnerOrCustomer
from .serializers import *
from ..models import *


class AppointmentListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = AppointmentSerializer
    permission_classes = [IsOwnerOrCreateOnly]

    def get_object(self):
        slug = self.kwargs['slug']
        return get_object_or_404(Salon, slug=slug)

    def get_queryset(self):
        salon = self.get_object()
        if self.request.user == salon.owner:
            return salon.appointments.all()
        return Appointment.objects.filter(employee__user=self.request.user, salon=salon)

    def perform_create(self, serializer):
        salon = self.get_object()
        data = serializer.validated_data

        if data['employee'].salon != salon:
            raise ValidationError("Operatore non valido")

        for i in data['services']:
            if i.salon != salon:
                raise ValidationError("Servizio non valido")

        serializer.save(salon=salon, customer=self.request.user)


class AppointmentRUDAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = AppointmentSerializer
    permission_classes = [IsSalonOwnerOrCustomer]
    queryset = Appointment.objects.all()
