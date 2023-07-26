from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _

from salon_booking.core.constants import LANGUAGES
from salon_booking.core.models import BaseModel


class User(AbstractUser, BaseModel):
    pic = models.ImageField(upload_to='users/pics/', default='users/pics/default.png')
    email = models.EmailField(_("email address"))
    first_name = models.CharField(_("first name"), max_length=150)
    last_name = models.CharField(_("last name"), max_length=150)

    REQUIRED_FIELDS = ["email", "first_name", 'last_name']


class UserSettings(BaseModel):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='settings')
    lang = models.CharField(max_length=64, choices=LANGUAGES, default="en")
    dark_theme = models.BooleanField(default=False)
    monochrome_theme = models.BooleanField(default=False)
