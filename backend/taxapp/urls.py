from django import urls
from django.urls import path
from .views import TaxList, TaxRateDetailsList, helloWorld,TaxRateDetailsView,TaxRateList
from taxapp import views

urlpatterns = [
    path('taxapp/', views.TaxView, name="tax-list"),
    # path('taxapp/', TaxList.as_view(), name='tax-list'),
    path('taxapp/<int:pk>/', views.TaxView, name='tax-detail'),
    # path('taxapp/<int:pk>/', TaxList.as_view(), name='tax-detail'),
    path('taxapp/country/<int:pk>/', views.CountryView, name='country-name'),
    path('taxapp/country/', views.CountryView, name='country-name'),
    # path('taxrate/', TaxRateList.as_view(), name="tax-rate"),
    path('taxrate/', views.TaxRateView, name="tax-rate"),
    path('taxrate/<int:pk>/', TaxRateList.as_view(), name="tax-rate"),
    path('taxratedetails/', views.TaxRateDetailsView, name="tax-rate-details")
]
