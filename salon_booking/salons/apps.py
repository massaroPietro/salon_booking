from django.apps import AppConfig


class SalonsConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "salon_booking.salons"

    def ready(self):
        import salon_booking.salons.signals
