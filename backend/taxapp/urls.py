from django import urls
from django.urls import path
from .views import TaxList, TaxDetail, helloWorld,TaxRateDetailsList
from taxapp import views

urlpatterns = [
    # path('taxapp/', views.TaxView, name="tax-list"),
    path('taxapp/', TaxList.as_view(), name='tax-list'),
    path('taxapp/<int:pk>/', TaxDetail.as_view(), name='tax-detail'),
    path('taxapp/country/<int:pk>/', views.CountryView, name='country-name'),
    path('taxapp/country/', views.CountryView, name='country-name'),
    path('taxrate/', views.TaxRateView, name="tax-rate"),
    path('taxratedetails/', views.TaxRateDetailsView, name="tax-rate-details"),
] 