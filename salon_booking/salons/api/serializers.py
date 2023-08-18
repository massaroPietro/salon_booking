import sys

from ..models import *
from rest_framework import serializers
from ...core.api.serializers import CustomImageField


class EmployeeSerializer(serializers.ModelSerializer):
    pic = CustomImageField(read_only=True)
    user = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Employee
        fields = "__all__"

    def get_user(self, instance):
        from salon_booking.users.api.serializers import UserSerializer
        return UserSerializer(instance.user).data


class FriendlySalonSerializer(serializers.ModelSerializer):
    logo = CustomImageField(read_only=True)

    class Meta:
        model = Salon
        fields = ('id', 'name', 'slug', 'owner', 'logo')
        read_only_fields = ('slug', 'owner')


class SalonSerializer(serializers.ModelSerializer):
    employees = EmployeeSerializer(read_only=True, many=True)
    logo = CustomImageField(read_only=True)

    class Meta:
        model = Salon
        fields = "__all__"
        read_only_fields = ('owner', 'slug',)
