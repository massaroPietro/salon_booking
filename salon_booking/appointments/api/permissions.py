from rest_framework import permissions
from rest_framework.generics import get_object_or_404

from salon_booking.salons.models import Salon

from django.contrib.auth import get_user_model

User = get_user_model()


class IsOwnerOrCreateOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            salon = view.get_object()
            return salon.employees.filter(user=request.user).exists()
        return True


class IsSalonOwnerOrCustomer(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        return obj.salon.employees.filter(user=request.user).exists() or request.user == obj.customer
