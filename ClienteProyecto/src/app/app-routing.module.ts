import { DrinksListComponent } from './Pages/drinks-list/drinks-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "drinkslist",
    component: DrinksListComponent
  },
  {
    path: "**",
    redirectTo: "drinkslist "
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
