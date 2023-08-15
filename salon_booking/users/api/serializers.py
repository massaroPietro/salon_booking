import urllib.parse

from dj_rest_auth.registration.serializers import RegisterSerializer
from dj_rest_auth.serializers import TokenSerializer
from django.contrib.auth import get_user_model
from django.db import transaction
from rest_framework import serializers
from rest_framework.generics import get_object_or_404

from salon_booking.salons.api.serializers import SalonSerializer, FriendlySalonSerializer
from salon_booking.salons.models import Salon, Employee
from salon_booking.users.models import User as UserType, UserSettings

User = get_user_model()


class UserSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSettings
        exclude = (
            'user',
        )


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "first_name", "last_name", "email"]
        read_only_fields = ('username', "email")


class UserRegistrationSerializer(RegisterSerializer):
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    username = None

    def custom_signup(self, request, user):
        user.first_name = self.validated_data.get('first_name', '')
        user.last_name = self.validated_data.get('last_name', '')
        user.save()

    def get_cleaned_data(self):
        data = super().get_cleaned_data()
        data['first_name'] = self.validated_data.get('first_name', '')
        data['last_name'] = self.validated_data.get('last_name', '')
        return data


class CustomTokenSerializer(TokenSerializer):
    user = serializers.SerializerMethodField(read_only=True)

    class Meta(TokenSerializer.Meta):
        fields = TokenSerializer.Meta.fields + ('user',)

    def get_user(self, instance):
        if Employee.objects.filter(user=instance.user).exists():
            return DashboardUserSerializer(instance.user).data
        else:
            return UserSerializer(instance.user).data


class DashboardUserSerializer(UserSerializer):
    settings = UserSettingsSerializer(read_only=True)
    salons = serializers.SerializerMethodField(read_only=True)
    pic = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = UserSerializer.Meta.fields + ['settings', 'salons', 'pic']

    def get_salons(self, instance):
        salons = Salon.objects.filter(employees__user=instance)
        return FriendlySalonSerializer(salons, many=True).data

    def get_pic(self, instance):
        request = self.context.get('request')
        salon = instance.settings.current_salon
        if salon and request:
            employee = Employee.objects.get(salon=salon, user=instance)
            return request.build_absolute_uri(employee.pic.url)
        return None
