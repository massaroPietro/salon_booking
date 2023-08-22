from django.db.models.signals import post_save
from django.dispatch import receiver

from salon_booking.core.constants import WEEKDAYS
from salon_booking.salons.models import Employee, WorkDay, EmployeeWorkDay


@receiver(post_save, sender=Employee)
def add_work_days_to_employee(sender, instance, created, **kwargs):
    if created:
        for i in WEEKDAYS:
            EmployeeWorkDay.objects.create(employee=instance, weekday=i[0])
