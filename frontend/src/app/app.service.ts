import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tax } from './Tax';

@Injectable({
  providedIn: 'root'
})
export class TaxService {
  private url: string = 'http://localhost:8000/api/taxapp/';

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
  
  getCountry(): Observable<Tax[]> {
    return this.http.get<Tax[]>(this.url);
  }
  
  
  
  updateTax(id: number, tax: Tax): Observable<Tax> {
    return this.http.put<Tax>(`${this.url}${id}/`, tax);
  }

  deleteTax(id: number): Observable<Tax> {
    return this.http.delete<Tax>(`${this.url}${id}/`);
  }

}
