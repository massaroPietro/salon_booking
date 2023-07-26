from django.contrib.auth import get_user_model
from rest_framework import generics
from rest_framework.generics import get_object_or_404

from .permissions import IsOwnerSettings
from .serializers import UserSettingsSerializer
from ..models import UserSettings

User = get_user_model()


class UserSettingsRUView(generics.RetrieveUpdateAPIView):
    serializer_class = UserSettingsSerializer
    permission_classes = [IsOwnerSettings]

    def get_object(self):
        user_id = self.kwargs['user_id']
        user_settings = get_object_or_404(UserSettings, user_id=user_id)
        return user_settings
