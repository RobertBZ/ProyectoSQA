import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DrinksListComponent } from './drinks-list/drinks-list.component';
const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children:[
      { path: 'drinks', component: DrinksListComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }