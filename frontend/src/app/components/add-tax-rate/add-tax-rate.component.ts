import { Component } from '@angular/core';
import { TaxRateService } from 'src/app/app.service';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { Tax, TaxRatePK } from 'src/app/Tax';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-add-tax-rate',
  templateUrl: './add-tax-rate.component.html',
  styleUrls: ['./add-tax-rate.component.css'],
})
export class AddTaxRateComponent {
  TaxRateForm!: FormGroup;
  data: any
  TaxAuthorityList: any;
  TaxRateList: any;

  constructor(private service: TaxRateService, private router: Router, private formBuilder: FormBuilder) {
    this.initForm();
    this.addNewRow();
  }
  

  ngOnInit(): void {
    this.refreshList();
    this.initForm();
  }


  refreshList() {
    this.service.getTaxAuthority().subscribe((data: Tax[]) => {
      // console.log(data);
      this.TaxAuthorityList = data;
      this.TaxAuthorityList.forEach((taxauthority: Tax) => {
        // console.log(taxauthority.pk, taxauthority.name);
      });
    });
  }



  initForm() {
    this.TaxRateForm = this.formBuilder.group({
      tax_rate_name: ['', [Validators.required]],
      tax_authority_ref_id: [''],
      tax_type_ref_id: [''],
      is_active: [true],
      tax_rate_details: this.formBuilder.array([this.tax_rate_details()])
    });
  }


  tax_rate_details() {
    return this.formBuilder.group({
      hsn_sac_no: ['', [Validators.required]],
      description: [''],
      from_date: [''],
      to_date: [''],
      tax_rate: [''],
      rcm_flag: [true],
      cess: [''],
    });
  }

  get formDetails() {
    return this.TaxRateForm.get('tax_rate_details') as FormArray;
  }

  addNewRow() {
    this.formDetails.push(this.tax_rate_details());
  }

  deleteRow(index: number) {
    if (index == 0) {
      return false;
    } else {
      this.formDetails.removeAt(index);
      return true;
    }
  }


  addTaxRate() {
    const formData = this.TaxRateForm.value;
    console.log(formData);
    this.service.addTaxRate(formData).subscribe(() => {
      this.router.navigate(['/viewtaxrate']);
    });
  }

  public useDefault1 = false;
  public toggle1(event: MatSlideToggleChange) {
    console.log('toggle', event.checked);
    this.useDefault1 = event.checked;
    this.TaxRateForm.patchValue({
      is_active: event.checked ? true : false,
    });
  }

  public useDefault2 = false;
  public toggle2(event: MatSlideToggleChange) {
    console.log('toggle', event.checked);
    this.useDefault2 = event.checked;
    this.tax_rate_details().patchValue({
      rcm_flag: event.checked ? true : false
    });
  }
}
