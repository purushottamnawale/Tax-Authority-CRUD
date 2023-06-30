from rest_framework import serializers
from .models import Tax,Country,TaxRate,TaxRateDetails

class CountrySerializer(serializers.ModelSerializer):
    country = serializers.StringRelatedField()
    class Meta:
        model=Country
        fields=('pk','country')

class TaxSerializer(serializers.ModelSerializer):
    country = serializers.StringRelatedField()  # Represents country as string instead of primary key
    country_name = serializers.CharField(source='country')  # Add country_name field
    
    class Meta:
        model = Tax
        fields = ('name', 'country', 'taxtype','zone','ward','status')

class TaxRateSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaxRate
        fields = ('tax_rate_name','tax_authority_ref_id','tax_type_ref_id','is_active','is_deleted','created_date_time','updated_date_time')

class TaxRateDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaxRateDetails
        fields = ('header_ref_id','hsn_sac_no','description','from_date','to_date','tax_rate','rcm_flag','cess','is_active','is_deleted','created_date_time','updated_date_time')
        
