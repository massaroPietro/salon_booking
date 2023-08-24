import sys

from allauth.account.models import EmailAddress
from django.db import transaction

from ..models import *
from rest_framework import serializers
from django.utils.translation import gettext as _

from ...core.api.serializers import WithoutSecondsTimeField


class EmployeeSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField(read_only=True)
    email_verified = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Employee
        fields = "__all__"

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
    work_ranges = EmployeeWorkRangeSerializer(many=True)

    class Meta:
        model = EmployeeWorkDay
        fields = ['id', 'work', 'weekday', 'work_ranges']
        read_only_fields = ['weekday', ]

    @transaction.atomic
    def update(self, instance, validated_data):
        for i in instance.work_ranges.all():
            i.delete()
        work_ranges_data = validated_data.pop('work_ranges', [])

        for work_range_data in work_ranges_data:
            EmployeeWorkRange.objects.create(**work_range_data)

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
