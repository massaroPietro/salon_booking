from ..models import *
from rest_framework import serializers


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = "__all__"


class SalonSerializer(serializers.ModelSerializer):
    employees = EmployeeSerializer(read_only=True, many=True)

    class Meta:
        model = Salon
        fields = "__all__"
        read_only_fields = ('owner', 'slug',)


class FriendlySalonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Salon
        fields = ('name', 'logo', 'slug', 'owner', )
        read_only_fields = ('slug', 'owner')
