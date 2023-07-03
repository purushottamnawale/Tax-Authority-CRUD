from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from requests import request
from rest_framework import generics
from .models import Tax,Country,TaxRate,TaxRateDetails
from .serializer import TaxSerializer,CountrySerializer,TaxRateSerializer,TaxRateDetailsSerializer
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.core.files.storage import default_storage

class TaxList(generics.ListCreateAPIView):
    queryset = Tax.objects.all()
    serializer_class = TaxSerializer

class TaxRateList(generics.ListCreateAPIView):
    queryset = TaxRate.objects.all()
    serializer_class = TaxRateSerializer

class TaxRateDetailsList(generics.ListCreateAPIView):
    queryset = TaxRateDetails.objects.all()
    serializer_class = TaxRateDetailsSerializer

def helloWorld(HttpRequest):
    return HttpResponse("Hello World")

@csrf_exempt
def CountryView(request, pk=0):  
    if request.method == 'GET':
        country = Country.objects.all()
        country_serializer = CountrySerializer(country,many=True)
        return JsonResponse(country_serializer.data, safe=False)
    
    elif request.method=='POST':
        country_data=JSONParser().parse(request)
        country_serializer = CountrySerializer(data=country_data)
        if country_serializer.is_valid():
            country_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        country_data = JSONParser().parse(request)
        country=Country.objects.get(CountryId=country_data['CountryId'])
        country_serializer=CountrySerializer(country,data=country_data)
        if country_serializer.is_valid():
            country_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        country=Country.objects.get(CountryId=pk)
        country.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)
    
@csrf_exempt
def TaxView(request, pk=0):  
    if request.method == 'GET':
        tax = Tax.objects.all()
        tax_serializer = TaxSerializer(tax, many=True)
        return JsonResponse(tax_serializer.data, safe=False)
    
    elif request.method=='POST':
        tax_data=JSONParser().parse(request)
        tax_serializer = TaxSerializer(data=tax_data)
        if tax_serializer.is_valid():
            tax_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        tax_data = JSONParser().parse(request)
        tax=Tax.objects.get(TaxId=tax_data['TaxId'])
        tax_serializer=TaxSerializer(tax,data=tax_data)
        if tax_serializer.is_valid():
            tax_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        tax=Tax.objects.get(TaxId=pk)
        tax.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)
    
@csrf_exempt
def TaxRateView(request,pk=0):  
    if request.method=='GET':
        taxrate = TaxRate.objects.all()
        taxrate_serializer = TaxRateSerializer(taxrate, many=True)
        return JsonResponse(taxrate_serializer.data, safe=False)
    
    elif request.method=='POST':
        taxrate_data=JSONParser().parse(request)
        taxrate_serializer = TaxRateSerializer(data=taxrate_data)
        if taxrate_serializer.is_valid():
            taxrate_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        taxrate_data = JSONParser().parse(request)
        taxrate=TaxRate.objects.get(TaxRateId=taxrate_data['TaxRateId'])
        taxrate_serializer=TaxRateSerializer(taxrate,data=taxrate_data)
        if taxrate_serializer.is_valid():
            taxrate_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        taxrate=TaxRate.objects.get(TaxRateId=pk)
        taxrate.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

@csrf_exempt
def TaxRateDetailsView(request,pk=0):
    if request.method=='GET':
        taxratedetails = TaxRateDetails.objects.all()
        taxratedetails_serializer = TaxRateDetailsSerializer(taxratedetails, many=True)
        return JsonResponse(taxratedetails_serializer.data, safe=False)

    elif request.method=='POST':
        taxratedetails_data=JSONParser().parse(request)
        taxratedetails_serializer = TaxRateDetailsSerializer(data=taxratedetails_data)
        if taxratedetails_serializer.is_valid():
            taxratedetails_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        taxratedetails_data = JSONParser().parse(request)
        taxratedetails=TaxRateDetails.objects.get(TaxRateDetailsId=taxratedetails_data['TaxRateDetailsId'])
        taxratedetails_serializer=TaxRateDetailsSerializer(taxratedetails,data=taxratedetails_data)
        if taxratedetails_serializer.is_valid():
            taxratedetails_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        taxratedetails=TaxRateDetails.objects.get(TaxRateDetailsId=pk)
        taxratedetails.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)
