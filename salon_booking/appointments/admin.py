from django.contrib import admin

from salon_booking.appointments.models import Appointment


# Register your models here.

@admin.register(Appointment)
class ModelNameAdmin(admin.ModelAdmin):
    pass
