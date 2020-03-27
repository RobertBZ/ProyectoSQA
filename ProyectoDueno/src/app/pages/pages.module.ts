import { NgModule } from '@angular/core';

import { CustomersPageComponent } from "./customers-page/customers-page.component";
import { DrinksPageComponent } from './drinks-page/drinks-page.component';
import { SalesPageComponent } from './sales-page/sales-page.component';
import { PagesComponent } from './pages.component';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FirebaseModule } from '../firebase';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
      PagesComponent,
      CustomersPageComponent,
      DrinksPageComponent,
      SalesPageComponent,
    ],
    imports: [
      PagesRoutingModule,
      AngularMaterialModule,
      FirebaseModule,
      FormsModule,
      ReactiveFormsModule
    ]
})

export class PagesModule { }