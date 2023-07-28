from django.conf import settings
from django.urls import path
from rest_framework.routers import DefaultRouter, SimpleRouter

from salon_booking.users.api.views import UserSettingsRUAPIView

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

urlpatterns = [
    path("user/<uuid:user_id>/settings/", UserSettingsRUAPIView.as_view())
]

app_name = "api"
urlpatterns += router.urls
