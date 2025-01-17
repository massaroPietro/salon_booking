from allauth.account.models import EmailAddress
from allauth.utils import email_address_exists
from rest_framework import mixins
from django.utils.text import slugify
from rest_framework import viewsets, generics
from rest_framework.decorators import action
from rest_framework.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from .permissions import IsOwnerOrReadOnly, IsOwner, IsOwnerOrEmployee, IsWorkDaySalonOwner, IsInvitationUser
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

        if len(slug_name) == 0:
            raise ValidationError(_('The salon name is invalid.'))

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

    def post(self, request, *args, **kwargs):
        email = request.data['email']

        if email_address_exists(email):
            response_data = {'email_exists': False,
                             'email': _('A user is already registered with this e-mail address.')}
            return Response(response_data, status=status.HTTP_400_BAD_REQUEST)

        return super().post(request, *args, **kwargs)

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

        work_ranges_data = data.get('work_ranges', [])

        for idx, x in enumerate(work_ranges_data):
            if x["from_hour"] >= x["to_hour"]:
                raise ValidationError({
                    'index': idx,
                    'message': _("Invalid time range for work range")
                })

        serializer.save()


class EmployeeInvitationListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = EmployeeInvitationForSalonSerializer
    permission_classes = [IsOwner]

    def get_queryset(self):
        salon = get_object_or_404(Salon, slug=self.kwargs['slug'])
        return salon.employee_invitations.all()


class EmployeeInvitationViewSet(viewsets.GenericViewSet):
    serializer_class = EmployeeInvitationForUserSerializer
    permission_classes = [IsInvitationUser]

    def get_queryset(self):
        return EmployeeInvitation.objects.filter(status=PENDING_STATUS)

    @transaction.atomic
    @action(detail=True, methods=['post'])
    def accept_invitation(self, request, pk=None):
        invitation = self.get_object()
        invitation.status = ACCEPTED_STATUS
        invitation.save()
        employee = Employee.objects.create(user=invitation.user, salon=invitation.salon)
        serializer = EmployeeSerializer(employee, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)

    @action(detail=True, methods=['post'])
    def reject_invitation(self, request, pk=None):
        invitation = self.get_object()
        invitation.status = REJECTED_STATUS
        invitation.save()
        return Response(status=status.HTTP_200_OK)


class SalonTimeSlotsSerializer(serializers.Serializer):
    salon = serializers.SlugRelatedField(queryset=Salon.objects.all(), slug_field='slug')
    services = serializers.ListField(child=serializers.PrimaryKeyRelatedField(queryset=Service.objects.all()),
                                     allow_empty=True)
    date = serializers.DateField()
    employee = serializers.PrimaryKeyRelatedField(queryset=Employee.objects.all())


class SalonTimeSlotsAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = SalonTimeSlotsSerializer(data=request.data)

        if serializer.is_valid():
            print(serializer.validated_data)
        return Response(status=status.HTTP_200_OK)
