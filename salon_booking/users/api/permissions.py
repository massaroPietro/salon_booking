from rest_framework.permissions import BasePermission

from salon_booking.salons.models import Employee


class IsOwnerSettings(BasePermission):

    def has_object_permission(self, request, view, obj):
        return obj.user == request.user


class IsEmployee(BasePermission):

    def has_permission(self, request, view):
        return Employee.objects.filter(user=request.user).exists()
