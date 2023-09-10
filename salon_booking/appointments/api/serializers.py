from rest_framework import serializers
from ..models import *
from ...users.api.serializers import FriendlyUserSerializer


class AppointmentSerializer(serializers.ModelSerializer):
    customer = FriendlyUserSerializer(read_only=True)

    class Meta:
        model = Appointment
        fields = "__all__"
        read_only_fields = ['salon', 'start', 'end']
