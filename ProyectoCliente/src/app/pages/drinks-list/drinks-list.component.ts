import { Client } from 'src/app/models/IClient';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AuthService } from './../../services/auth.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DrinkDetailsComponent } from './../drink-details/drink-details.component';
import { DrinksService } from './../../services/drinks.service';
import { Drink } from './../../models/IDrink';


@Component({
  templateUrl: './drinks-list.component.html',
  styleUrls: ['./drinks-list.component.scss']
})
export class DrinksListComponent implements OnInit {
  client : Observable<Client>;

  public isMobile: boolean = false;
  drinks : Observable<Drink[]>;
  Client : any =
  { "Name" : "Jesus", "LastName" : "Aguilar", "Credits" : "2000"}

  constructor(breakpointObserver: BreakpointObserver, public dialog: MatDialog, private drinkService: DrinksService ,  private authService : AuthService) {
    this.client = this.authService.userData;
    console.log(this.client);
    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  

  ngOnInit() {
    this.drinks = this.drinkService.readDrinks();
  }

  openDetails(drink){
    let dialogRef = this.dialog.open(DrinkDetailsComponent, {
      width: '90%',
      height: '90%',
      data: drink,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
