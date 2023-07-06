import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ActivatedRoute, Router } from '@angular/router';
import { TaxRateService, TaxService } from 'src/app/app.service';
import { Country, Tax } from 'src/app/Tax';

@Component({
  selector: 'app-update-tax-rate',
  templateUrl: './update-tax-rate.component.html',
  styleUrls: ['./update-tax-rate.component.css']
})
export class UpdateTaxRateComponent {
  data: any;
  taxrate: any;
  TaxAuthorityList: any;
  TaxRateList: any;
  TaxRateForm: FormGroup;

  constructor(private taxRateService: TaxRateService, private taxService: TaxService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
    this.TaxRateForm = this.formBuilder.group({
      tax_rate_name: ['', [Validators.required]],
      tax_authority_ref_id: [''],
      tax_type_ref_id: [''],
      is_active: [true],
      tax_rate_details: this.formBuilder.array([this.tax_rate_details()])
    });
  }
  ngOnInit(): void {
    let pk = this.route.snapshot.params['pk'];
    this.taxRateService.getTaxRate(pk).subscribe(data => {
      this.taxrate = data
      console.log(this.taxrate)
      this.populateForm();
    })
    this.refreshList();
  }

  refreshList() {
    this.taxService.getTaxes().subscribe((data) => {
      // console.log(data);
      this.TaxAuthorityList = data;
      this.TaxAuthorityList.forEach((tax: Tax) => {
        // console.log(tax.pk, tax.name);
      });
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

  populateForm(): void {
    this.TaxRateForm.patchValue({
      tax_rate_name: this.taxrate.tax_rate_name,
      tax_authority_ref_id: this.taxrate.tax_authority_ref_id,
      tax_type_ref_id: this.taxrate.tax_type_ref_id,
      is_active:this.taxrate.is_active,
      tax_rate_details: this.formBuilder.array([this.tax_rate_details()])
    });
  }

  submit() {
    this.data = this.TaxRateForm.value
    this.taxrate.tax_rate_name = this.data.tax_rate_name
    this.taxrate.tax_authority_ref_id = this.data.tax_authority_ref_id
    this.taxrate.is_active = this.data.is_active
    this.taxrate.tax_rate_details= this.formBuilder.array([this.tax_rate_details()])

    // console.log(this.data)

    this.taxRateService.updateTaxRate(this.taxrate?.pk, this.taxrate).subscribe(data => {
      // console.log(data)
    })

    this.router.navigate(['/']);
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
