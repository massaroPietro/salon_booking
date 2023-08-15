from allauth.account.models import EmailAddress
from django.db import transaction
from django.utils.text import slugify
from rest_framework import viewsets, generics
from rest_framework.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response

from .permissions import IsOwnerOrReadOnly, IsOwner
from ..models import *
from .serializers import *
from rest_framework import status
from dj_rest_auth.registration.views import RegisterView


class SalonViewSet(viewsets.ModelViewSet):
    permission_classes = [IsOwnerOrReadOnly]
    lookup_field = 'slug'

    def get_queryset(self):
        user = self.request.user

        return user.salons.all()

    def get_serializer_class(self):
        try:
            if self.request.user == self.get_object().owner:
                return SalonSerializer
        except:
            pass
        return FriendlySalonSerializer

    @transaction.atomic
    def perform_create(self, serializer):
        user = self.request.user
        slug_name = slugify(serializer.validated_data['name'])

        if Salon.objects.filter(slug=slug_name).exists():
            raise ValidationError(_('There is already a salon with this name'))

        salon = serializer.save(owner=user, slug=slug_name)
        Employee.objects.create(user=user, salon=salon)


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
