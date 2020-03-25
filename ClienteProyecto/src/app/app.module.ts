import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import MDBootstrap
import { MDBBootstrapModule } from 'angular-bootstrap-md';
//

//import from pages
import { DrinksListComponent } from './Pages/drinks-list/drinks-list.component';
//=================

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DrinksListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
