import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tax, TaxRate, TaxRateDetails } from 'src/app/Tax';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaxRateService } from '../../app.service';


@Component({
  selector: 'app-view-tax-rate',
  templateUrl: './view-tax-rate.component.html',
  styleUrls: ['./view-tax-rate.component.css'],
})


export class ViewTaxRateComponent {

  taxrates: any | undefined;

  constructor(private taxrateService: TaxRateService) { }

  ngOnInit(): void {
    this.taxrateService.getTaxRateList().subscribe(data => {
      this.taxrates = data;
      console.log(data)
    });
  }

  deleteTaxRate(id: number) {
    this.taxrateService.deleteTaxRate(id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }

}
