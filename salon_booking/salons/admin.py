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
    list_display = ('employee', 'weekday', 'work')


@admin.register(EmployeeWorkRange)
class ModelNameAdmin(admin.ModelAdmin):
    list_filter = ('work_day__employee', 'work_day__weekday')
    list_display = ('employee', 'work_day', 'from_hour', 'to_hour')

    def employee(self, obj):
        return obj.work_day.employee

    def from_hour(self, obj):
        return obj.work_day.from_hour

    def to_hour(self, obj):
        return obj.work_day.to_hour


@admin.register(EmployeeInvitation)
class ModelNameAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'salon', 'status')
