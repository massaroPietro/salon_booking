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
    logo = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Salon
        fields = ('id', 'name', 'logo', 'slug', 'owner')
        read_only_fields = ('slug', 'owner')

    def get_logo(self, instance):
        print(self.context.get('request'))
        request = self.context.get('request')
        if request:
            return request.build_absolute_uri(instance.logo.url)
        return None
