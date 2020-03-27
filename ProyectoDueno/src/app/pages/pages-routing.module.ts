import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { CustomersPageComponent } from './customers-page/customers-page.component';
import { DrinksPageComponent } from './drinks-page/drinks-page.component';
import { SalesPageComponent } from './sales-page/sales-page.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children:[
      { path: 'customers', component: CustomersPageComponent },
      { path: 'drinks', component: DrinksPageComponent },
      { path: 'sales', component: SalesPageComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }