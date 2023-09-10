import os

import requests
from allauth.account.models import EmailAddress
from allauth.socialaccount.models import SocialAccount
from django.contrib.auth import get_user_model
from django.core.files.base import ContentFile
from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver
from django.utils.text import slugify
from allauth.socialaccount.signals import *

from config.settings.base import MEDIA_ROOT
from salon_booking.salons.models import Employee
from salon_booking.users.models import UserSettings

User = get_user_model()


@receiver(pre_social_login)
def merge_social_accounts(sender, request, sociallogin, **kwargs):
    try:
        try:
            existing_user = User.objects.get(email=sociallogin.user.email)
        except User.DoesNotExist:
            return

        if existing_user != sociallogin.user:
            email = EmailAddress.objects.get(user=existing_user)
            email.verified = True
            email.save()
            sociallogin.connect(request, existing_user)

    except SocialAccount.DoesNotExist:
        pass


@receiver(pre_save, sender=User)
def create_username(sender, instance, **kwargs):
    if not instance.username:
        username = slugify(instance.email.split('@')[0])
        n = 1
        while User.objects.filter(username=username).exists():
            username = username + str(n)
            n += 1
        instance.username = username


@receiver(post_save, sender=Employee)
def add_info_to_user(sender, instance, created, **kwargs):
    if created and not UserSettings.objects.filter(user=instance.user).exists():
        UserSettings.objects.create(user=instance.user, current_salon=instance.salon)
