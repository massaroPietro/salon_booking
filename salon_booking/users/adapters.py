from __future__ import annotations

import os
import typing

from allauth.account.adapter import DefaultAccountAdapter
from allauth.socialaccount.adapter import DefaultSocialAccountAdapter
from django.conf import settings
from django.http import HttpRequest
from allauth.socialaccount.models import SocialLogin
from django.contrib.auth import get_user_model
import requests
from django.core.files.base import ContentFile

User = get_user_model()


class AccountAdapter(DefaultAccountAdapter):
    def get_email_confirmation_url(self, request, emailconfirmation):
        return settings.FRONTEND_BASE_URL + "/auth/verify-email/" + emailconfirmation.key

    def is_open_for_signup(self, request: HttpRequest) -> bool:
        return getattr(settings, "ACCOUNT_ALLOW_REGISTRATION", True)

    def send_mail(self, template_prefix, email, context):
        print(template_prefix)
        print(email)
        print(context)
        from django.contrib.sites.shortcuts import get_current_site
        super().send_mail(template_prefix, email, context)


class SocialAccountAdapter(DefaultSocialAccountAdapter):

    def is_open_for_signup(self, request: HttpRequest, sociallogin: SocialLogin) -> bool:
        return getattr(settings, "ACCOUNT_ALLOW_REGISTRATION", True)

    def populate_user(self, request: HttpRequest, sociallogin: SocialLogin, data: dict[str, typing.Any]) -> User:
        user = sociallogin.user
        if name := data.get("name"):
            user.name = name
        elif first_name := data.get("first_name"):
            user.name = first_name
            if last_name := data.get("last_name"):
                user.name += f" {last_name}"
        return super().populate_user(request, sociallogin, data)
