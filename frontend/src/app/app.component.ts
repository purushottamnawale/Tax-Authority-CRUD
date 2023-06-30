import { Component } from '@angular/core';
import { TaxService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  getCountry: any;
  constructor(private getCountryData: TaxService) {
    getCountryData.getCountry().subscribe((data) => {
      console.warn("data",data);
      this.getCountry = data
    });

  }
}
