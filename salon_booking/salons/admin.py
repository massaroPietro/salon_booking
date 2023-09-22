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


class EmployeeWorkRangeInline(admin.TabularInline):
    model = EmployeeWorkRange
    extra = 0  # Questo evita di visualizzare campi vuoti per l'aggiunta di nuovi work ranges

@admin.register(EmployeeWorkDay)
class EmployeeWorkDayAdmin(admin.ModelAdmin):
    list_filter = ('employee',)
    list_display = ('employee', 'weekday', 'work')
    inlines = [EmployeeWorkRangeInline]

    # Aggiungere questa funzione per visualizzare i work ranges all'interno del work day
    def work_ranges(self, obj):
        return ', '.join([f"{wr.from_hour} - {wr.to_hour}" for wr in obj.work_ranges.all()])
    work_ranges.short_description = 'Work Ranges'

@admin.register(EmployeeWorkRange)
class EmployeeWorkRangeAdmin(admin.ModelAdmin):
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
