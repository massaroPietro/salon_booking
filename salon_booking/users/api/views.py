from django.contrib.auth import get_user_model
from rest_framework import generics
from rest_framework.generics import get_object_or_404

from .permissions import IsOwnerSettings
from .serializers import UserSettingsSerializer
from ..models import UserSettings

from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from dj_rest_auth.registration.views import SocialLoginView, SocialConnectView
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter

User = get_user_model()


class UserSettingsRUAPIView(generics.RetrieveUpdateAPIView):
    serializer_class = UserSettingsSerializer
    permission_classes = [IsOwnerSettings]

    def get_object(self):
        user_id = self.kwargs['user_id']
        user_settings = get_object_or_404(UserSettings, user_id=user_id)
        return user_settings


class GoogleLogin(SocialLoginView):  # if you want to use Authorization Code Grant, use this
    adapter_class = GoogleOAuth2Adapter
    client_class = OAuth2Client


class GoogleConnect(SocialConnectView):
    adapter_class = GoogleOAuth2Adapter
    client_class = OAuth2Client
