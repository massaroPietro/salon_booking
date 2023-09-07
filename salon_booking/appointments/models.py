from rest_framework.exceptions import ValidationError

from salon_booking.salons.models import *

from django.contrib.auth import get_user_model

from salon_booking.services.models import Service

User = get_user_model()


class Appointment(BaseModel):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, related_name='appointments')
    salon = models.ForeignKey(Salon, on_delete=models.CASCADE, related_name='appointments')
    customer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='appointments')
    services = models.ManyToManyField(Service)
    date = models.DateTimeField()
    start = models.PositiveIntegerField(default=0)
    end = models.PositiveIntegerField(default=0)

    def save(self, *args, **kwargs):
        self.start = int(self.date.timestamp() * 1000)
        end_time = self.start
        for service in self.services.all():
            end_time += int(service.duration_in_milliseconds)
        self.end = end_time
        super().save(*args, **kwargs)
