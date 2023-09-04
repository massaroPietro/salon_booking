from django.contrib import admin

from .models import *


# Register your models here.

@admin.register(Salon)
class ModelNameAdmin(admin.ModelAdmin):
    pass


@admin.register(Employee)
class ModelNameAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'salon', "created_at")
    list_filter = ('user', 'salon', "created_at")


@admin.register(EmployeeWorkDay)
class ModelNameAdmin(admin.ModelAdmin):
    list_filter = ('employee',)


@admin.register(EmployeeWorkRange)
class ModelNameAdmin(admin.ModelAdmin):
    pass

@admin.register(EmployeeInvitation)
class ModelNameAdmin(admin.ModelAdmin):
    list_display = ('user', 'salon', 'status')
