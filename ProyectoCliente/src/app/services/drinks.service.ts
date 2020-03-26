import { Injectable } from '@angular/core';
import { IDrink } from './../models/IDrink';
import { DBService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  collectionName : string = 'Drinks';

  constructor(private dbService : DBService) { }

  createClient( drink : IDrink ) {
    return this.dbService.createDocument<IDrink>( this.collectionName, drink );
  }

  readClients() {
    return this.dbService.readDocuments<IDrink>( this.collectionName );
  }

  updateClient( drink : IDrink ) {
    return this.dbService.updateDocument<IDrink>( this.collectionName, drink );
  }

  deleteClient( drink : IDrink ){
    return this.dbService.deleteDocument(this.collectionName, drink );
  }

}
