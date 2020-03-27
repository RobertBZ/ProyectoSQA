import { NgModule } from '@angular/core';

import { CustomersPageComponent } from "./customers-page/customers-page.component";
import { DrinksPageComponent } from './drinks-page/drinks-page.component';
import { SalesPageComponent } from './sales-page/sales-page.component';
import { PagesComponent } from './pages.component';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FirebaseModule } from '../firebase';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerModalComponent } from '../modals/customer-modal/customer-modal.component';
import { CustomerDeleteModalComponent } from '../modals/customer-delete-modal/customer-delete-modal.component';

@NgModule({
    declarations: [
      PagesComponent,
      CustomersPageComponent,
      DrinksPageComponent,
      SalesPageComponent,
      CustomerModalComponent,
      CustomerDeleteModalComponent
    ],
    imports: [
      PagesRoutingModule,
      AngularMaterialModule,
      FirebaseModule,
      FormsModule,
      ReactiveFormsModule
    ],
    entryComponents: [
      CustomerModalComponent,
      CustomerDeleteModalComponent
    ],
})

export class PagesModule { }