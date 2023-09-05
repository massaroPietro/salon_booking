from rest_framework import permissions
from rest_framework.generics import get_object_or_404

from salon_booking.salons.models import Salon


class IsOwnerOrCreateOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            salon = view.get_object()
            return request.user == salon.owner
        return True

class IsSalonOwnerOrCustomer(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        return request.user == obj.salon.owner or request.user == obj.customer
