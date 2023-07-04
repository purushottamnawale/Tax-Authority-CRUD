import { Component } from '@angular/core';
import { TaxRateService } from 'src/app/app.service';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Tax, TaxRatePK } from 'src/app/Tax';


@Component({
  selector: 'app-add-tax-rate',
  templateUrl: './add-tax-rate.component.html',
  styleUrls: ['./add-tax-rate.component.css'],
})
export class AddTaxRateComponent {
  public taxRateDetailsForm: FormGroup;


  constructor(private service: TaxRateService, private router: Router, private fb: FormBuilder) {
    this.taxRateDetailsForm = this.fb.group({
      tableRows: this.fb.array([], [Validators.required])
    });
    this.addRow();
  }

  createFormGroup(): FormGroup {
    return this.fb.group({
      header_ref_id: new FormControl<number | null>(null, Validators.required),
      hsn_sac_no: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      from_date: new FormControl(new Date(), Validators.required),
      to_date: new FormControl(new Date(), Validators.required),
      tax_rate: new FormControl('', Validators.required),
      rcm_flag: new FormControl(true,),
      cess: new FormControl('', Validators.required),
    });
  }

  get getFormControls() {
    const control = this.taxRateDetailsForm.get('tableRows') as FormArray;
    return control;
  }

  addRow() {
    const control = this.taxRateDetailsForm.get('tableRows') as FormArray;
    control.push(this.createFormGroup());
  }

  removeEmployee(index:number){
    const control=this.taxRateDetailsForm.get('tableRows') as FormArray;
    control.removeAt(index);
  }

  TaxAuthorityList: any;
  TaxRateList: any;

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.service.getTaxAuthority().subscribe((data: Tax[]) => {
      // console.log(data);
      this.TaxAuthorityList = data;
      this.TaxAuthorityList.forEach((taxauthority: Tax) => {
        console.log(taxauthority.pk, taxauthority.name);
      });
    });
    this.service.getTaxRatePK().subscribe((data: TaxRatePK[]) => {
      // console.log(data);
      this.TaxRateList = data;
      this.TaxRateList.forEach((taxrate: TaxRatePK) => {
        // console.log(taxrate.pk, taxrate.tax_rate_name);
        this.taxRateDetailsForm.patchValue({
          header_ref_id: taxrate.pk
        });
      });
    });
  }

  data: any

  form1 = new FormGroup({
    tax_rate_name: new FormControl('', Validators.required),
    tax_authority_ref_id: new FormControl('', Validators.required),
    tax_type_ref_id: new FormControl('', Validators.required),
    is_active: new FormControl(true),
  });


  addTaxRate() {
    const form1Data = this.form1.value;
    const form2Data = this.taxRateDetailsForm.value.tableRows;
  
    this.service.addTaxRate(form1Data).subscribe(() => {
      this.service.addTaxRateDetails(form2Data).subscribe(() => {
        // Both form1 and form2 data have been successfully submitted
        this.router.navigate(['/viewtaxrate']);
      });
    });
  }
  
  

  public useDefault1 = false;
  public toggle1(event: MatSlideToggleChange) {
    console.log('toggle', event.checked);
    this.useDefault1 = event.checked;
    this.form1.patchValue({
      is_active: event.checked ? true : false,
    });
  }

  public useDefault2 = false;
  public toggle2(event: MatSlideToggleChange) {
    console.log('toggle', event.checked);
    this.useDefault2 = event.checked;
    this.taxRateDetailsForm.patchValue({
      rcm_flag: event.checked ? true : false
    });
  }

}
