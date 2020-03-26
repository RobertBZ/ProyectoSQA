import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FirebaseModule } from './firebase/firebase.module';
import { LoginComponent } from './pages/login/login.component';
import { CustomersPageComponent } from './pages/customers-page/customers-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomersPageComponent
  ],
  imports: [
    AngularMaterialModule,
    FirebaseModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
