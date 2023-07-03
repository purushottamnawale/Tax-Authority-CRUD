import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaxComponent } from './components/add-tax/add-tax.component';
import { UpdateTaxComponent } from './components/update-tax/update-tax.component';
import { ViewTaxComponent } from './components/view-tax/view-tax.component';
import { AddTaxRateComponent } from './components/add-tax-rate/add-tax-rate.component';
import { ViewTaxRateComponent } from './components/view-tax-rate/view-tax-rate.component';

const routes: Routes = [
  // { path: '', component: ViewTaxComponent },
  { path: '', component: AddTaxRateComponent},
  { path: 'add', component: AddTaxComponent },
  { path: 'update/:id', component: UpdateTaxComponent},
  { path: 'addtaxrate', component: AddTaxRateComponent},
  { path: 'viewtaxrate', component: ViewTaxRateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
