import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tax, TaxRate, TaxRateDetails } from 'src/app/Tax';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaxRateService, TaxService } from '../../app.service';


@Component({
  selector: 'app-view-tax-rate',
  templateUrl: './view-tax-rate.component.html',
  styleUrls: ['./view-tax-rate.component.css'],
})


export class ViewTaxRateComponent {

  taxrates: any[] | undefined;
  taxes: any={} ;

  constructor(
    private taxRateService: TaxRateService,
    private taxService: TaxService) { }

  ngOnInit(): void {
    this.taxRateService.getTaxRateList().subscribe(data => {
      this.taxrates = data;
      console.log(data)
      this.fetchTaxNames();
    });
  }

  fetchTaxNames() {
    this.taxService.getTaxes().subscribe(data => {
      this.taxes = data;
    });
  }

  deleteTaxRate(id: number) {
    this.taxRateService.deleteTaxRate(id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }

}
