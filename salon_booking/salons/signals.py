from django.db.models.signals import post_save
from django.dispatch import receiver

from salon_booking.core.constants import WEEKDAYS
from salon_booking.salons.models import Employee, WorkDay, EmployeeWorkDay, EmployeeWorkRange


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
