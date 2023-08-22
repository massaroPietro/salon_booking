from django.conf import settings
from django.urls import path
from rest_framework.routers import DefaultRouter, SimpleRouter

from salon_booking.salons.api.views import *
from salon_booking.users.api.views import *

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register('salons', SalonViewSet, basename='salons')

urlpatterns = [
    # User
    path("auth/dashboard-user/settings/", UserSettingsRUAPIView.as_view()),
    path("auth/dashboard-user/", DashboardUserRetrieveAPIView.as_view()),

    # Salons
    path('salons/check-existence/', CheckSalonExistence.as_view(), name='check-salon-existence'),

    # Employees
    path("salons/<slug:slug>/employees/register/", EmployeeRegisterAPIView.as_view()),
    path("salons/<slug:slug>/employees/", EmployeeListAPIView.as_view()),
    path("employees/<uuid:pk>/", EmployeeRUDAPIView.as_view()),
    path("work-days/<uuid:pk>/", EmployeeWorkDayRUAPIView.as_view()),

]

app_name = "api"
urlpatterns += router.urls
