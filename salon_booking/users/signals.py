import requests
from allauth.socialaccount.models import SocialAccount
from django.contrib.auth import get_user_model
from django.core.files.base import ContentFile
from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver
from django.utils.text import slugify
from allauth.socialaccount.signals import *
from allauth.account.signals import user_signed_up
from django.shortcuts import get_object_or_404

from salon_booking.users.models import UserSettings

User = get_user_model()


@receiver(user_signed_up)
def add_social_pic(sender, request, user, sociallogin=None, **kwargs):
    if sociallogin:
        url = sociallogin.account.extra_data.get('picture')
        if url:
            response = requests.get(url)
            user.pic.save(f"{user.pk}_profile_pic.jpg", ContentFile(response.content))
            user.save()


@receiver(pre_social_login)
def merge_social_accounts(sender, request, sociallogin, **kwargs):
    try:
        try:
            existing_user = User.objects.get(email=sociallogin.user.email)
        except User.DoesNotExist:
            return

        if existing_user != sociallogin.user:
            sociallogin.connect(request, existing_user)
    except SocialAccount.DoesNotExist:
        pass


@receiver(pre_save, sender=User)
def create_username(sender, instance, **kwargs):
    if not instance.username:
        username = slugify(instance.email.split('@')[0])  # generate username from email
        n = 1
        while User.objects.filter(username=username).exists():  # check if username already exists
            username = username + str(n)
            n += 1
        instance.username = username


@receiver(post_save, sender=User)
def add_info_to_user(sender, instance, created, **kwargs):
    if created:
        UserSettings.objects.create(user=instance)
