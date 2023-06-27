from django.db import models

class Country(models.Model):
    country=models.CharField(max_length=50)

    def __str__(self):
        return self.name

# Create your models here
class Tax(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    # country = models.ForeignKey(Country,on_delete=models.CASCADE)
    taxtype = models.CharField(max_length=10)
    zone=models.CharField(max_length=255, null=True, blank=True)
    ward=models.CharField(max_length=255, null=True, blank=True)
    status = models.CharField(max_length=255, null=True, blank=True)


    def __str__(self):
        return self.name
