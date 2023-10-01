from datetime import timedelta

from django.db import models

from salon_booking.core.constants import *
from salon_booking.core.models import BaseModel
from django.contrib.auth import get_user_model

from salon_booking.services.models import Service

User = get_user_model()


# Create your models here.


class Salon(BaseModel):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='salons')
    name = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    logo = models.ImageField(default='salons/pics/default.png', upload_to="salons/pics/")

    def __str__(self):
        return self.name


class SalonSettings(BaseModel):
    salon = models.OneToOneField(Salon, on_delete=models.CASCADE, related_name='settings')
    slot_time = models.DurationField(default=timedelta(minutes=15))
    booking_enabled = models.BooleanField(default=True)


class Employee(BaseModel):
    pic = models.ImageField(upload_to='users/pics/', default='employees/pics/default.png')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='employees')
    salon = models.ForeignKey(Salon, on_delete=models.CASCADE, related_name='employees')

    class Meta:
        unique_together = ('user', 'salon',)

    def __str__(self):
        return self.user.username + " - " + self.salon.name


class WorkDay(BaseModel):
    work = models.BooleanField(default=True)
    weekday = models.IntegerField(choices=WEEKDAYS)

    class Meta:
        abstract = True


class EmployeeWorkDay(WorkDay):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, related_name='work_days')

    class Meta:
        unique_together = ('employee', 'weekday',)

    def __str__(self):
        return self.employee.__str__() + " " + self.weekday.__str__()


class WorkRange(BaseModel):
    from_hour = models.TimeField()
    to_hour = models.TimeField()

    class Meta:
        abstract = True


class EmployeeWorkRange(WorkRange):
    work_day = models.ForeignKey(EmployeeWorkDay, on_delete=models.CASCADE, related_name='work_ranges')


class EmployeeInvitation(BaseModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='employee_invitations')
    salon = models.ForeignKey(Salon, on_delete=models.CASCADE, related_name='employee_invitations')
    status = models.CharField(max_length=255, choices=INVITATION_STATUS, default=PENDING_STATUS)

    def __str__(self):
        return self.user.username + " - " + self.salon.name

    class Meta:
        unique_together = ('user', 'salon',)
