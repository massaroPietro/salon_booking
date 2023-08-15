from django.db import models

from salon_booking.core.models import BaseModel
from django.contrib.auth import get_user_model

User = get_user_model()


# Create your models here.


class Salon(BaseModel):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='salons')
    name = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    logo = models.ImageField(default='salons/pics/default.png', upload_to="salons/pics/")

    def __str__(self):
        return self.name


class Employee(BaseModel):
    pic = models.ImageField(upload_to='users/pics/', default='users/pics/default.png')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='employees')
    salon = models.ForeignKey(Salon, on_delete=models.CASCADE, related_name='employees')

    def __str__(self):
        return self.user.username
