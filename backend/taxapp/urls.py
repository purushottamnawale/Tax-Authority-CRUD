from django import urls
from django.urls import path
from .views import TaxList, helloWorld,TaxRateDetailsView,TaxRateDetailsList
from taxapp import views

urlpatterns = [
    # path('taxapp/', views.TaxView, name="tax-list"),
    path('taxapp/', TaxList.as_view(), name='tax-list'),
    path('taxapp/<int:pk>/', views.TaxView, name='tax-detail'),
    path('taxapp/country/<int:pk>/', views.CountryView, name='country-name'),
    path('taxapp/country/', views.CountryView, name='country-name'),
    path('taxrate/', views.TaxRateList.as_view(), name="tax-rate"),
    path('taxrate/<int:pk>/', views.TaxRateView, name="tax-rate"),
    path('taxratedetails/', TaxRateDetailsList.as_view(), name="tax-rate-details"),
] 