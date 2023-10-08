from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver

from salon_booking.core.constants import WEEKDAYS
from salon_booking.salons.models import Employee, WorkDay, EmployeeWorkDay, EmployeeWorkRange, Salon, SalonSettings
from salon_booking.users.models import UserSettings


@receiver(post_save, sender=Employee)
def add_work_days_to_employee(sender, instance, created, **kwargs):
    if created:
        for i in WEEKDAYS:
            work_day = EmployeeWorkDay.objects.create(employee=instance, weekday=i[0])

            EmployeeWorkRange.objects.create(
                work_day=work_day,
                from_hour='08:00',
                to_hour='13:00'
            )

            EmployeeWorkRange.objects.create(
                work_day=work_day,
                from_hour='15:00',
                to_hour='20:00'
            )


@receiver(post_save, sender=Salon)
def add_work_days_to_employee(sender, instance, created, **kwargs):
    if created:
        SalonSettings.objects.create(salon=instance)


@receiver(post_delete, sender=Salon)
def change_current_salon_settings(sender, instance, **kwargs):
    users_settings = UserSettings.objects.filter(current_salon=instance)
