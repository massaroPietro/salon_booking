from django.apps import AppConfig


class AppointmentsConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "salon_booking.appointments"

    def ready(self):
        import salon_booking.appointments.signals
