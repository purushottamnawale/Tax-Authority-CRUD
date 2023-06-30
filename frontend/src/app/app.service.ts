import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tax,TaxRate,TaxRateDetails,Country} from './Tax';

@Injectable({
  providedIn: 'root'
})

export class TaxService {
  private url: string = 'http://localhost:8000/api/taxapp/';
  readonly APIUrl= 'http://localhost:8000/api/taxapp/country/';

  constructor(private http: HttpClient) { }

  addTax(tax: Tax): Observable<Tax> {
    return this.http.post<Tax>(this.url, tax);
  }

  getTaxes(): Observable<Tax[]> {
    return this.http.get<Tax[]>(this.url);
  }
  
  getTax(id: number): Observable<Tax> {
    return this.http.get<Tax>(`${this.url}${id}`);
  }
  
  // getCountry() :Observable<any[]>{
  //   return this.http.get<any[]>(this.APIUrl);
  // }

  getCountry(): Observable<Country[]> {
    return this.http.get<Country[]>(this.APIUrl);
  }

  updateTax(id: number, tax: Tax): Observable<Tax> {
    return this.http.put<Tax>(`${this.url}${id}/`, tax);
  }

  deleteTax(id: number): Observable<Tax> {
    return this.http.delete<Tax>(`${this.url}${id}/`);
  }

}

@Injectable({
  providedIn: 'root'
})


export class TaxRateService {
  readonly APIUrl= 'http://localhost:8000/api/taxrate/';
  readonly APIUrl2= 'http://localhost:8000/api/taxratedetails/';
  constructor(private http: HttpClient) { }

  getTaxRateList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl);
  }

  addTaxRate(val:any){
    return this.http.post(this.APIUrl,val);
  }

  updateTaxRate(val:any){
    return this.http.put(this.APIUrl,val);
  }

  deleteTaxRate(val:any){
    return this.http.delete(this.APIUrl+val);
  }

  getTaxRateDetailsList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl2);
  }

  addTaxRateDetails(val:any){
    return this.http.post(this.APIUrl2,val);
  }

  updateTaxRateDetails(val:any){
    return this.http.put(this.APIUrl2,val);
  }

  deleteTaxRateDetails(val:any){
    return this.http.delete(this.APIUrl2+val);
  }
}

