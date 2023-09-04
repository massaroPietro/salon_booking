from django.db import models

from salon_booking.core.models import BaseModel

# Create your models here.

class Service(BaseModel):
    salon = models.ForeignKey("salons.Salon", on_delete=models.CASCADE, related_name='services')
    name = models.CharField(max_length=255)
    duration = models.DurationField()
    price = models.FloatField()
    image = models.ImageField(upload_to="services/pics", default="services/pics/default.png")
    employees = models.ManyToManyField("salons.Employee", blank=True)