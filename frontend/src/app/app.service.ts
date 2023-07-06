import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tax, TaxRate, TaxRateDetails, Country } from './Tax';

@Injectable({
  providedIn: 'root'
})

export class TaxService {
  private url: string = 'http://localhost:8000/api/taxapp/';
  readonly APIUrl = 'http://localhost:8000/api/taxapp/country/';

  constructor(private http: HttpClient) { }

  addTax(tax: Tax): Observable<Tax> {
    return this.http.post<Tax>(this.url, tax);
  }

  getTaxes(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getTax(pk: number): Observable<Tax> {
    return this.http.get<Tax>(`${this.url}${pk}`);
  }

  // getCountry() :Observable<any[]>{
  //   return this.http.get<any[]>(this.APIUrl);
  // }

  getCountry(): Observable<Country[]> {
    return this.http.get<Country[]>(this.APIUrl);
  }

  updateTax(pk: number, tax: Tax): Observable<Tax> {
    return this.http.put<Tax>(`${this.url}${pk}/`, tax);
  }

  // updateTax(val: any) {
  //   return this.http.put(this.url, val);
  // }

  deleteTax(pk: number): Observable<Tax> {
    return this.http.delete<Tax>(`${this.url}${pk}/`);
  }
}

@Injectable({
  providedIn: 'root'
})


export class TaxRateService {
  readonly APIUrl = 'http://localhost:8000/api/taxrate/';
  readonly APIUrl2 = 'http://localhost:8000/api/taxapp/';
  readonly APIUrl3 = 'http://localhost:8000/api/taxratedetails/';
  constructor(private http: HttpClient) { }

  getTaxRateList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl);
  }
  getTaxRate(pk: number): Observable<TaxRate> {
    return this.http.get<TaxRate>(`${this.APIUrl}${pk}`);
  }

  addTaxRate(val: any) {
    return this.http.post(this.APIUrl, val);
  }

  // updateTaxRate(val: any) {
  //   return this.http.put(this.APIUrl, val);
  // }

  updateTaxRate(pk: number, tax: TaxRate): Observable<TaxRate> {
    return this.http.put<TaxRate>(`${this.APIUrl}${pk}/`, tax);
  }


  deleteTaxRate(pk: number): Observable<TaxRate>{
    return this.http.delete<TaxRate>(`${this.APIUrl}${pk}/`);
  }

  getTaxAuthority(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl2);
  }
  getTaxRatePK(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl);
  }

  getTaxRateDetailsList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl3);
  }

  addTaxRateDetails(val: any) {
    return this.http.post(this.APIUrl3, val);
  }

  updateTaxRateDetails(val: any) {
    return this.http.put(this.APIUrl3, val);
  }

  deleteTaxRateDetails(val: any) {
    return this.http.delete(this.APIUrl3 + val);
  }
}

