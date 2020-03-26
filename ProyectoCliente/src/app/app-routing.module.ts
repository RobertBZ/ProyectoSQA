import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrinksListComponent } from './drinks-list/drinks-list.component';


const routes: Routes = [
  {
    path: "drinks",
    component: DrinksListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
