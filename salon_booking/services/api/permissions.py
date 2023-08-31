from rest_framework import permissions


class IsServiceOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.salon.owner == request.user
