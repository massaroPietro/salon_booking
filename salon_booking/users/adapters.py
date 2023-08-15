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

from config.settings.base import MEDIA_ROOT

User = get_user_model()


def download_and_save_picture(user, picture_url):
    response = requests.get(picture_url)
    if response.status_code == 200:
        previous_image_filename = f"{user.id}_social_profile_pic.jpg"
        user.pic.save(previous_image_filename, ContentFile(response.content))


class AccountAdapter(DefaultAccountAdapter):
    def is_open_for_signup(self, request: HttpRequest) -> bool:
        return getattr(settings, "ACCOUNT_ALLOW_REGISTRATION", True)

    def send_mail(self, template_prefix, email, context):
        print(template_prefix)
        print(email)
        print(context)
        from django.contrib.sites.shortcuts import get_current_site
        super().send_mail(template_prefix, email, context)


class SocialAccountAdapter(DefaultSocialAccountAdapter):
    def save_user(self, request, sociallogin, form=None):
        user = super().save_user(request, sociallogin, form)
        if picture_url := sociallogin.account.extra_data.get("picture"):
            download_and_save_picture(user, picture_url)

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
