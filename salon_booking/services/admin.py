from django.contrib import admin

from salon_booking.services.models import Service


# Register your models here.

@admin.register(Service)
class ModelNameAdmin(admin.ModelAdmin):
    pass
