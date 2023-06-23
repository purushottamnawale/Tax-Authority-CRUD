from django import urls
from django.urls import path
from .views import TaxList, TaxDetail, helloWorld

urlpatterns = [
    path('taxapp/', TaxList.as_view(), name="tax-list"),
    path('taxapp/<int:pk>/', TaxDetail.as_view(), name='tax-detail'),
    path('hello/', helloWorld, name='hello-world')
] 