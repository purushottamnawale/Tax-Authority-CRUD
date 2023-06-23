import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaxComponent } from './components/add-tax/add-tax.component';
import { UpdateTaxComponent } from './components/update-tax/update-tax.component';
import { ViewTaxComponent } from './components/view-tax/view-tax.component';

const routes: Routes = [
  { path: '', component: ViewTaxComponent },
  { path: 'add', component: AddTaxComponent },
  { path: 'update/:id', component: UpdateTaxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
