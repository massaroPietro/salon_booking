from allauth.account.models import EmailAddress
from django.db import transaction
from django.utils.text import slugify
from rest_framework import viewsets, generics
from rest_framework.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView

from .permissions import IsOwnerOrReadOnly, IsOwner, IsOwnerOrEmployee, IsWorkDaySalonOwner
from ..models import *
from .serializers import *
from rest_framework import status
from dj_rest_auth.registration.views import RegisterView
import time


class SalonViewSet(viewsets.ModelViewSet):
    permission_classes = [IsOwnerOrReadOnly]
    lookup_field = 'slug'
    queryset = Salon.objects.all()

    def get_serializer_class(self):
        if self.action in ['update', 'partial_update', 'retrieve']:
            if self.get_object().owner == self.request.user:
                return SalonSerializer
        elif self.action == 'create':
            return SalonSerializer
        return FriendlySalonSerializer

    @transaction.atomic
    def perform_create(self, serializer):
        user = self.request.user
        slug_name = slugify(serializer.validated_data['name'])

        if Salon.objects.filter(slug=slug_name).exists():
            raise ValidationError(_('There is already a salon with this name'))

        salon = serializer.save(owner=user, slug=slug_name)
        Employee.objects.create(user=user, salon=salon)
        user.settings.current_salon = salon
        user.settings.save()


class EmployeeListAPIView(generics.ListAPIView):
    serializer_class = EmployeeSerializer
    permission_classes = [IsOwner]

    def get_queryset(self):
        salon = get_object_or_404(Salon, slug=self.kwargs['slug'])
        return salon.employees.all()


class EmployeeRegisterAPIView(RegisterView):
    permission_classes = [IsOwner]

    @transaction.atomic
    def perform_create(self, serializer):
        user = super().perform_create(serializer)
        salon = get_object_or_404(Salon, slug=self.kwargs['slug'])
        Employee.objects.create(user=user, salon=salon)


class CheckSalonExistence(APIView):
    def post(self, request, *args, **kwargs):
        salon_name = request.data.get('name', None)

        if salon_name:
            slug = slugify(salon_name)
            available = not Salon.objects.filter(slug=slug).exists()
            return Response({"available": available, "slug": slug, "name": salon_name})
        else:
            return Response({"exists": False})


class EmployeeRUDAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = FullEmployeeSerializer
    queryset = Employee.objects.all()
    permission_classes = [IsOwnerOrEmployee]


class EmployeeWorkDayRUAPIView(generics.RetrieveUpdateAPIView):
    serializer_class = EmployeeWorkDaySerializer
    queryset = EmployeeWorkDay.objects.all()
    permission_classes = [IsWorkDaySalonOwner]

    def perform_update(self, serializer):
        data = serializer.validated_data

        for idx, x in enumerate(data['work_ranges']):
            if x["from_hour"] >= x["to_hour"]:
                raise ValidationError({
                    'index': idx,
                    'message': _("Invalid time range for work range")
                })

        serializer.save()
