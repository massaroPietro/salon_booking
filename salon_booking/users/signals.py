from django.contrib.auth import get_user_model
from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver
from django.utils.text import slugify

from salon_booking.users.models import UserSettings

User = get_user_model()


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
