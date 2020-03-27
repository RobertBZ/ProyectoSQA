import { PagesComponent } from './pages.component';
import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { DrinksListComponent } from './drinks-list/drinks-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseModule } from '../firebase';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PagesComponent,
    DrinksListComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FirebaseModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
