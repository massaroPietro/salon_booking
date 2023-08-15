from django.contrib import admin

from .models import *


# Register your models here.

@admin.register(Salon)
class ModelNameAdmin(admin.ModelAdmin):
    pass


@admin.register(Employee)
class ModelNameAdmin(admin.ModelAdmin):
    pass
