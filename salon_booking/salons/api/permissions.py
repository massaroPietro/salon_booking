from rest_framework import permissions
from rest_framework.generics import get_object_or_404

from salon_booking.salons.models import Salon


class IsOwnerOrReadOnly(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user == obj.owner


class IsOwner(permissions.BasePermission):

    def has_permission(self, request, view):
        if 'slug' not in view.kwargs:
            return False
        salon = get_object_or_404(Salon, slug=view.kwargs['slug'])
        return salon.owner == request.user


class IsOwnerOrEmployee(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if obj.salon.owner == request.user or obj.user == request.user:
            if permissions.SAFE_METHODS:
                return True
            return obj.salon.owner == request.user
        return False


class IsWorkDaySalonOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.employee.salon.owner == request.user


class IsInvitationUser(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        return obj.user == request.user
