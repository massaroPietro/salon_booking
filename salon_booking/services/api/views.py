from rest_framework import generics
from rest_framework.generics import get_object_or_404

from salon_booking.salons.api.permissions import IsOwner
from salon_booking.salons.models import Salon
from salon_booking.services.api.permissions import IsServiceOwner
from salon_booking.services.api.serializers import ServiceSerializer
from salon_booking.services.models import Service


class ServiceListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = ServiceSerializer
    permission_classes = [IsOwner]

    def perform_create(self, serializer):
        salon = get_object_or_404(Salon, slug=self.kwargs['slug'])
        serializer.save(salon=salon)

    def get_queryset(self):
        salon = get_object_or_404(Salon, slug=self.kwargs['slug'])
        return salon.services.all()


class ServiceRUDAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ServiceSerializer
    queryset = Service.objects.all()
    permission_classes = [IsServiceOwner]
