import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaxService } from 'src/app/app.service';
import { Tax } from 'src/app/Tax';

@Component({
  selector: 'app-update-tax',
  templateUrl: './update-tax.component.html',
  styleUrls: ['./update-tax.component.css']
})
export class UpdateTaxComponent {

  tax?: any
  data: any


  constructor(private service: TaxService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getTax(id).subscribe(data => {
      this.tax = data
      console.log(this.tax)
    })
  }

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    taxtype: new FormControl('', Validators.required),
    zone: new FormControl('', Validators.required),
    ward: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
  })

  submit(){
    this.data = this.form.value
    this.tax.name = this.data.name
    this.tax.country = this.data.country
    this.tax.taxtype = this.data.taxtype
    this.tax.zone = this.data.zone
    this.tax.ward = this.data.ward
    this.tax.status = this.data.status
    console.log(this.data)
    
    this.service.updateTax(this.tax?.id, this.tax).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/']);
  }

}
