import { Component } from '@angular/core';
import { TaxService } from 'src/app/app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-add-tax',
  templateUrl: './add-tax.component.html',
  styleUrls: ['./add-tax.component.css']
})
export class AddTaxComponent {

  constructor(private service: TaxService, private router: Router) { }

  ngOnInit(): void {
  }

  data: any

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    taxtype: new FormControl('', Validators.required),
    zone: new FormControl('', Validators.required),
    ward: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
  });

  addTax() {
    this.data = this.form.value;
    this.service.addTax(this.data).subscribe(data => {
      // redirect to home page
      this.router.navigate(['/']);
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
