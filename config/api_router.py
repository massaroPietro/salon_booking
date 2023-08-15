from django.conf import settings
from django.urls import path
from rest_framework.routers import DefaultRouter, SimpleRouter

from salon_booking.salons.api.views import SalonViewSet, EmployeeRegisterAPIView, EmployeeListAPIView
from salon_booking.users.api.views import UserSettingsRUAPIView

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register('salons', SalonViewSet, basename='salons')

urlpatterns = [
    # User
    path("user/<uuid:user_id>/settings/", UserSettingsRUAPIView.as_view()),

    # Employees
    path("salons/<slug:slug>/employees/register/", EmployeeRegisterAPIView.as_view()),
    path("salons/<slug:slug>/employees/", EmployeeListAPIView.as_view())
]

app_name = "api"
urlpatterns += router.urls
