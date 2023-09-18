from rest_framework import serializers
from ..models import *
from ...users.api.serializers import FriendlyUserSerializer


class OwnerAppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = "__all__"
        read_only_fields = ['end']


class AppointmentSerializer(serializers.ModelSerializer):
    customer = FriendlyUserSerializer(read_only=True)

    class Meta:
        model = Appointment
        fields = "__all__"
        read_only_fields = ['salon', 'end']
