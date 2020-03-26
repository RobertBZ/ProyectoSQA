import { Injectable } from '@angular/core';
import { Drink, IDrink } from './../models/IDrink';
import { DBService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  constructor(private dbService : DBService) { }

  

}
