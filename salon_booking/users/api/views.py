from allauth.utils import build_absolute_uri
from django.contrib.auth import get_user_model
from django.contrib.sites.shortcuts import get_current_site
from rest_framework import generics
from rest_framework.generics import get_object_or_404

from .permissions import IsOwnerSettings, IsEmployee
from .serializers import UserSettingsSerializer, DashboardUserSerializer
from ..models import UserSettings

from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from dj_rest_auth.registration.views import SocialLoginView, SocialConnectView
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter

User = get_user_model()


class UserSettingsRUAPIView(generics.RetrieveUpdateAPIView):
    serializer_class = UserSettingsSerializer

    def get_object(self):
        return self.request.user.settings


class GoogleLogin(SocialLoginView):  # if you want to use Authorization Code Grant, use this
    adapter_class = GoogleOAuth2Adapter
    client_class = OAuth2Client


class GoogleConnect(SocialConnectView):
    adapter_class = GoogleOAuth2Adapter
    client_class = OAuth2Client


class DashboardUserRetrieveAPIView(generics.RetrieveAPIView):
    serializer_class = DashboardUserSerializer

    def get_object(self):
        return self.request.user
