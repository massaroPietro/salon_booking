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


from rest_framework import serializers


class HourMinuteDurationField(serializers.DurationField):
    def to_internal_value(self, value):
        if isinstance(value, str):
            hours, minutes = map(int, value.split(':'))
            return datetime.timedelta(hours=hours, minutes=minutes)
        return super().to_internal_value(value)

    def to_representation(self, value):
        if isinstance(value, datetime.timedelta):
            hours = value.seconds // 3600
            minutes = (value.seconds // 60) % 60
            return f'{hours:02}:{minutes:02}'
        return super().to_representation(value)
