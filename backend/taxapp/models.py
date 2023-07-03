from datetime import timezone
from django.db import models
from django.utils import timezone


class Country(models.Model):
    country = models.CharField(max_length=255)

    def __str__(self):
        return self.country


class Tax(models.Model):
    name = models.CharField(max_length=255)
    country = models.ForeignKey(Country,on_delete=models.CASCADE)
    taxtype = models.CharField(max_length=10)
    zone = models.CharField(max_length=255, null=True, blank=True)
    ward = models.CharField(max_length=255, null=True, blank=True)
    status = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.name

TAX_TYPE_CHOICES = (
("Income Tax","Income Tax"),
("GST","GST"),
)

class TaxRate(models.Model):
    tax_rate_name = models.CharField(max_length=30, verbose_name='Tax Rate Name')
    tax_authority_ref_id =  models.ForeignKey(Tax, verbose_name="Tax Authority Ref ID",on_delete=models.PROTECT)
    tax_type_ref_id = models.CharField(max_length=50, verbose_name="Tax Type Ref ID",choices=TAX_TYPE_CHOICES)    
    is_active = models.BooleanField(default=True, verbose_name='TaxRate Is Active')
    is_deleted = models.BooleanField(default=False, verbose_name="TaxRate Is Deleted")
    created_date_time = models.DateTimeField(verbose_name="TaxRate Created Date Time", auto_now_add=True)
    updated_date_time = models.DateTimeField(default=timezone.localtime, verbose_name="TaxRate Updated Date Time")

    def delete(self):
        self.is_deleted = True
        self.is_active = False
        self.save()    

    def __str__(self):
        return self.tax_rate_name

class TaxRateDetails(models.Model):
    header_ref_id = models.ForeignKey(TaxRate,verbose_name="TaxRateDetails Header Ref ID",on_delete=models.CASCADE,related_name='initialItemRow')
    hsn_sac_no = models.CharField(max_length=30, default=0,verbose_name='HSN or SAC No')
    description = models.CharField(max_length=30, verbose_name='Description',blank=True)
    from_date = models.DateField(verbose_name="TaxRateDetails From Date", auto_now_add=False)
    to_date = models.DateField(verbose_name="TaxRateDetails To Date", auto_now_add=False)
    tax_rate  = models.DecimalField(default=0, max_digits=10, decimal_places=2, verbose_name='Tax Rate')
    rcm_flag = models.BooleanField(default=False,verbose_name="RCM Flag")
    cess  = models.DecimalField(default=0, max_digits=10, decimal_places=2, verbose_name='CESS',blank=True)
    is_deleted = models.BooleanField(default=False, verbose_name="TaxRateDetails Is Deleted")
    created_date_time = models.DateTimeField(verbose_name="TaxRateDetails Created Date Time", auto_now_add=True)
    updated_date_time = models.DateTimeField(default=timezone.localtime, verbose_name="TaxRateDetails Updated Date Time")


    def delete(self):
        self.is_deleted = True
        self.is_active = False
        self.save()