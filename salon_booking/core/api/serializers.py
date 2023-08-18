from rest_framework import serializers
from django.conf import settings


class CustomImageField(serializers.ImageField):
    def to_representation(self, value):
        return settings.BACKEND_BASE_URL + value.url
