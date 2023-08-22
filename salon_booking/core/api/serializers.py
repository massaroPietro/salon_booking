import datetime

from rest_framework import serializers
from django.conf import settings


class WithoutSecondsTimeField(serializers.TimeField):
    def to_representation(self, value):
        if isinstance(value, datetime.time):
            return value.strftime('%I:%M')
        return super().to_representation(value)


class CustomImageField(serializers.ImageField):
    def to_representation(self, value):
        return settings.BACKEND_BASE_URL + value.url
