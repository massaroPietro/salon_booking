from django.contrib.auth import get_user_model
from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver

from salon_booking.appointments.models import Appointment

User = get_user_model()


@receiver(pre_save, sender=Appointment)
def calculate_end_appointment(sender, instance, **kwargs):
    pass
