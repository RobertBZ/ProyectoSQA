import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CustomersPageComponent } from './pages/customers-page/customers-page.component';
import { DrinksPageComponent } from './pages/drinks-page/drinks-page.component';
import { SalesPageComponent } from './pages/sales-page/sales-page.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'customers',
    component: CustomersPageComponent
  },
  {
    path: 'drinks',
    component: DrinksPageComponent
  },
  {
    path: 'sales',
    component: SalesPageComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
