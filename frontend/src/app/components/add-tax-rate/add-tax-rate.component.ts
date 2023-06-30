import { Component } from '@angular/core';
import { TaxRateService } from 'src/app/app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-add-tax-rate',
  templateUrl: './add-tax-rate.component.html',
  styleUrls: ['./add-tax-rate.component.css'],
})
export class AddTaxRateComponent {

  constructor(private service: TaxRateService, private router: Router) { }


  ngOnInit(): void {
  }

  data: any


  form = new FormGroup({
    taxratename: new FormControl('', Validators.required),
    taxauthority: new FormControl('', Validators.required),
    taxtype: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
  });

  addTaxRate() {
    this.data = this.form.value;
    this.service.addTaxRate(this.data).subscribe(data => {
      // redirect to home page
      this.router.navigate(['/viewtaxrate']);
    });
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
