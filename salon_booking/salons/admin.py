from django.contrib import admin

from .models import *


# Register your models here.

@admin.register(Salon)
class ModelNameAdmin(admin.ModelAdmin):
    pass


@admin.register(Employee)
class ModelNameAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'salon', )
    list_filter = ('user', 'salon', )


@admin.register(EmployeeWorkDay)
class ModelNameAdmin(admin.ModelAdmin):
    list_filter = ('employee',)


@admin.register(EmployeeWorkRange)
class ModelNameAdmin(admin.ModelAdmin):
    pass
