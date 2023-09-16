from salon_booking.salons.models import *

from django.contrib.auth import get_user_model

from salon_booking.services.models import Service

User = get_user_model()


class Appointment(BaseModel):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, related_name='appointments')
    salon = models.ForeignKey(Salon, on_delete=models.CASCADE, related_name='appointments')
    customer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='appointments')
    services = models.ManyToManyField(Service)
    start = models.DateTimeField()
    end = models.DateTimeField()
