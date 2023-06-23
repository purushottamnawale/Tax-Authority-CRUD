from django.db import models

# Create your models here
class Tax(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    taxtype = models.CharField(max_length=10)
    zone=models.CharField(max_length=255, null=True, blank=True)
    ward=models.CharField(max_length=255, null=True, blank=True)
    status = models.CharField(max_length=255, null=True, blank=True)


    def __str__(self):
        return self.name
