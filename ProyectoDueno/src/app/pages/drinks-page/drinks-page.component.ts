import { Component, OnInit } from '@angular/core';
import { Drink } from 'src/app/models/IDrink';
import { Observable } from 'rxjs';
import { DrinksService } from 'src/app/services/drinks.service';
import { MatDialog } from '@angular/material';
import { DrinkModalComponent } from 'src/app/modals/drink-modal/drink-modal.component';

@Component({
  selector: 'app-drinks-page',
  templateUrl: './drinks-page.component.html',
  styleUrls: ['./drinks-page.component.scss']
})
export class DrinksPageComponent implements OnInit {

  public isMobile: boolean = false;
  drinksColumns: string[] = ['name'];
  drinks : Observable<Drink[]>;
  constructor(
    private drinkService : DrinksService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.drinks = this.drinkService.readDrinks();
  }
  
  showData(data: any){
    console.log(data);
  }

  showViewDrinkModal(drink : Drink) {
    this.dialog.open(DrinkModalComponent, {
      width: '500px',
      data: { state: true }
    });
  }

  showCreateDrinkModal() {
    this.dialog.open(DrinkModalComponent, {
      width: '500px',
      data: { state: true }
    });
  }

  showEditDrinkModal(drink : Drink) {
    this.dialog.open(DrinkModalComponent, {
      width: '500px',
      data: { state: true }
    });
  }

  showDeleteDrinkModal(drink : Drink){
    this.dialog.open(DrinkModalComponent, {
      width: '500px',
      data: { state: true }
    });
  }
}
