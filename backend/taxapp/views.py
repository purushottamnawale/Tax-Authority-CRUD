from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from rest_framework import generics
from .models import Tax
from .serializer import TaxSerializer

class TaxList(generics.ListCreateAPIView):
    queryset = Tax.objects.all()
    serializer_class = TaxSerializer

class TaxDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tax.objects.all()
    serializer_class = TaxSerializer

def helloWorld(HttpRequest):
    return HttpResponse("Hello World")
