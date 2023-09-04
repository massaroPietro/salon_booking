from django.conf import settings
from django.urls import path
from rest_framework.routers import DefaultRouter, SimpleRouter

from salon_booking.salons.api.views import *
from salon_booking.services.api.views import *
from salon_booking.users.api.views import *

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register('salons', SalonViewSet, basename='salons')
router.register("invitations", EmployeeInvitationViewSet, basename="invitations")

urlpatterns = [
    # User
    path("auth/dashboard-user/settings/", UserSettingsRUAPIView.as_view()),
    path("auth/dashboard-user/", DashboardUserRetrieveAPIView.as_view()),

    # Salons
    path('salons/check-existence/', CheckSalonExistence.as_view(), name='check-salon-existence'),

    # Employees
    path("salons/<slug:slug>/employees/register/", EmployeeRegisterAPIView.as_view()),
    path("salons/<slug:slug>/employees/", EmployeeListAPIView.as_view()),
    path("salons/<slug:slug>/invitations/", EmployeeInvitationListCreateAPIView.as_view()),
    path("employees/<uuid:pk>/", EmployeeRUDAPIView.as_view()),
    path("employee/work-days/<uuid:pk>/", EmployeeWorkDayRUAPIView.as_view()),

    # Services
    path("salons/<slug:slug>/services/", ServiceListCreateAPIView.as_view()),
    path("services/<uuid:pk>/", ServiceRUDAPIView.as_view()),
]

app_name = "api"
urlpatterns += router.urls
