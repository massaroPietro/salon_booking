from rest_framework import serializers

from salon_booking.core.api.serializers import HourMinuteDurationField
from salon_booking.services.models import Service


class FriendlyServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service


class ServiceSerializer(serializers.ModelSerializer):
    duration = HourMinuteDurationField()

    class Meta:
        model = Service
        fields = "__all__"
        read_only_fields = ('salon',)
