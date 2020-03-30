import { PagesComponent } from './pages.component';
import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { DrinksListComponent } from './drinks-list/drinks-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseModule } from '../firebase';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DrinkDetailsComponent } from './drink-details/drink-details.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    PagesComponent,
    DrinksListComponent,
    DrinkDetailsComponent
  ],
  entryComponents: [
    DrinkDetailsComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FirebaseModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class PagesModule { }
