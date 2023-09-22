from allauth.account.models import EmailAddress
from django.db import transaction
from rest_framework.exceptions import ValidationError
from rest_framework.generics import get_object_or_404

from ..models import *
from rest_framework import serializers
from django.utils.translation import gettext as _
from ...services.api.serializers import ServiceSerializer


class EmployeeSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField(read_only=True)
    email_verified = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Employee
        fields = "__all__"
        read_only_fields = ['salon']

    def get_user(self, instance):
        from salon_booking.users.api.serializers import UserSerializer
        return UserSerializer(instance.user).data

    def get_email_verified(self, instance):
        try:
            email_address = EmailAddress.objects.get(user=instance.user, primary=True)

            return email_address.verified
        except EmailAddress.DoesNotExist:
            return False


class EmployeeWorkRangeSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployeeWorkRange
        fields = "__all__"


class EmployeeWorkDaySerializer(serializers.ModelSerializer):
    work_ranges = EmployeeWorkRangeSerializer(many=True, required=False)

    class Meta:
        model = EmployeeWorkDay
        fields = ['id', 'work', 'weekday', 'work_ranges']
        read_only_fields = ['weekday', ]

    @transaction.atomic
    def update(self, instance, validated_data):

        work_ranges_data = validated_data.pop('work_ranges', [])
        if len(work_ranges_data) > 0:
            for i in instance.work_ranges.all():
                i.delete()

            for work_range_data in work_ranges_data:
                EmployeeWorkRange.objects.create(**work_range_data)

        instance.work = validated_data.get('work', instance.work)
        instance.save()

        return instance


class FullEmployeeSerializer(EmployeeSerializer):
    work_days = EmployeeWorkDaySerializer(read_only=True, many=True)


class FriendlySalonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Salon
        fields = ('id', 'name', 'slug', 'owner', 'logo')
        read_only_fields = ('slug', 'owner')


class SalonSerializer(serializers.ModelSerializer):
    employees = EmployeeSerializer(read_only=True, many=True)
    services = ServiceSerializer(read_only=True, many=True)

    class Meta:
        model = Salon
        fields = "__all__"
        read_only_fields = ('owner', 'slug',)


class BookingEmployeeSerializer(serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Employee
        fields = ['pic', 'full_name']

    def get_full_name(self, instance):
        return instance.user.get_full_name()


class BookingSalonSerializer(serializers.ModelSerializer):
    employees = BookingEmployeeSerializer(many=True, read_only=True)

    class Meta:
        model = Salon
        fields = ['name', 'logo', 'employees']


class EmployeeInvitationForSalonSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(write_only=True)

    class Meta:
        model = EmployeeInvitation
        exclude = [
            'user',
        ]
        read_only_fields = ['salon', "status"]

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['email'] = instance.user.email
        return data

    def create(self, validated_data):
        slug = self.context['view'].kwargs['slug']
        email = validated_data.pop('email')
        user = get_object_or_404(User, email=email)
        salon = get_object_or_404(Salon, slug=slug)

        if Employee.objects.filter(user=user, salon=salon).exists():
            raise ValidationError(_("The user with this email is already part of the salon"))

        if EmployeeInvitation.objects.filter(user=user, salon=salon).exists():
            raise ValidationError(_("An invitation already exists for this email"))

        employee_invitation = EmployeeInvitation.objects.create(user=user, salon=salon)
        return employee_invitation


class EmployeeInvitationForUserSerializer(serializers.ModelSerializer):
    salon = FriendlySalonSerializer(read_only=True)

    class Meta:
        model = EmployeeInvitation
        fields = "__all__"
        read_only_fields = ['user', 'status']
