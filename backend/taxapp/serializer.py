from rest_framework import serializers
from .models import Tax,Country,TaxRate,TaxRateDetails

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model=Country
        fields=('pk','country')

class TaxSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tax
        fields = ('pk','name', 'country', 'taxtype', 'zone', 'ward', 'status')

class TaxRateDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaxRateDetails
        fields = ('hsn_sac_no','description','from_date','to_date','tax_rate','rcm_flag','cess','is_deleted','created_date_time','updated_date_time')
        
class TaxRateSerializer(serializers.ModelSerializer):
    tax_rate_details=TaxRateDetailsSerializer(many=True,required=False)
    class Meta:
        model = TaxRate
        fields = ('pk','tax_rate_name','tax_authority_ref_id','tax_type_ref_id','is_active','is_deleted','created_date_time','updated_date_time','tax_rate_details')

    def create(self, validated_data):
        tax_rate_details = validated_data.pop('tax_rate_details')
        receipt_instance = TaxRate.objects.create(**validated_data)
        
        for whr_i in tax_rate_details:
            TaxRateDetails.objects.create(**whr_i, header_ref_id=receipt_instance)
        
        return receipt_instance