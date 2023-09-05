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
        return self.get_object().appointments.all()


class AppointmentRUDAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = AppointmentSerializer
    permission_classes = [IsSalonOwnerOrCustomer]
