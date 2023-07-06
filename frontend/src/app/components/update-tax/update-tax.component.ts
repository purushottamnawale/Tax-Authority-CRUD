import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ActivatedRoute, Router } from '@angular/router';
import { TaxService } from 'src/app/app.service';
import { Country, Tax } from 'src/app/Tax';

@Component({
  selector: 'app-update-tax',
  templateUrl: './update-tax.component.html',
  styleUrls: ['./update-tax.component.css']
})
export class UpdateTaxComponent {

  tax: any
  data: any
  CountryList: any;
  form:FormGroup;

  constructor(private service: TaxService, private route: ActivatedRoute, private router : Router) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      taxtype: new FormControl('', Validators.required),
      zone: new FormControl('', Validators.required),
      ward: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
    });
   }

  ngOnInit(): void {
    let pk = this.route.snapshot.params['pk'];
    this.service.getTax(pk).subscribe(data => {
      this.tax = data
      console.log(this.tax)
      this.populateForm();
    })
    this.refreshList();

  }

  refreshList() {
    this.service.getCountry().subscribe((data) => {
      console.log(data);
      this.CountryList = data;
      this.CountryList.forEach((country: Country) => {
        // console.log(country.pk, country.country);
      });
    });
  }

  // form = new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   country: new FormControl('', [Validators.required]),
  //   taxtype: new FormControl('', Validators.required),
  //   zone: new FormControl('', Validators.required),
  //   ward: new FormControl('', Validators.required),
  //   status: new FormControl('', Validators.required),
  // })

  populateForm(): void {
    this.form.patchValue({
      name: this.tax.name,
      country: this.tax.country,
      taxtype: this.tax.taxtype,
      zone: this.tax.zone,
      ward: this.tax.ward,
      status: this.tax.status
    });
  }


  submit(){
    this.data = this.form.value
    this.tax.name = this.data.name
    this.tax.country = this.data.country
    this.tax.taxtype = this.data.taxtype
    this.tax.zone = this.data.zone
    this.tax.ward = this.data.ward
    this.tax.status = this.data.status
    console.log(this.data)
    
    this.service.updateTax(this.tax?.pk, this.tax).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/']);
  }
  public useDefault = false;

  public toggle(event: MatSlideToggleChange) {
    console.log('toggle', event.checked);
    this.useDefault = event.checked;
    this.form.patchValue({
      status: event.checked ? "Active" : "Inactive"
    });
  }

}
