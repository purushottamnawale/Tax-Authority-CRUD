import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tax } from 'src/app/Tax';
import { TaxService } from '../../app.service';

@Component({
  selector: 'app-view-tax',
  templateUrl: './view-tax.component.html',
  styleUrls: ['./view-tax.component.css']
})
export class ViewTaxComponent {
  taxes: any | undefined;
  countries: any={} ;
  

  constructor(private taxService: TaxService) { }

  ngOnInit(): void {
    this.taxService.getTaxes().subscribe(data => {
      this.taxes = data;

      console.log(data)
    });
  }

  fetchTaxNames() {
    this.taxService.getCountry().subscribe(data => {
      this.countries = data;
    });
  }

  deleteTax(id: number) {
    this.taxService.deleteTax(id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }

}
