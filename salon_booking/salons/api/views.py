from allauth.account.models import EmailAddress
from django.db import transaction
from django.utils.text import slugify
from rest_framework import viewsets, generics
from rest_framework.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView

from .permissions import IsOwnerOrReadOnly, IsOwner
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
        if self.action == 'list':
            return FriendlySalonSerializer
        elif self.action in ['update', 'partial_update', 'retrieve']:
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
        email = get_object_or_404(EmailAddress, user=user)
        email.verified = True
        email.save()

    def create(self, request, *args, **kwargs):
        super().create(request, *args, **kwargs)
        return Response(status=status.HTTP_204_NO_CONTENT)


class CheckSalonExistence(APIView):
    def post(self, request, *args, **kwargs):
        salon_name = request.data.get('name', None)

        if salon_name:
            slug = slugify(salon_name)
            available = not Salon.objects.filter(slug=slug).exists()
            return Response({"available": available, "slug": slug, "name": salon_name})
        else:
            return Response({"exists": False})
