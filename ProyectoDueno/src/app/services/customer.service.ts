import { Injectable } from '@angular/core';
import { IClient } from './../models/IClient';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  collectionName : string = 'Clients';

  constructor(
    private dbService : DbService
  ) { }

  createClient( client : IClient ) {
    return this.dbService.createDocumentWithID<IClient>( this.collectionName, client );
  }

  readClients() {
    return this.dbService.readDocuments<IClient>( this.collectionName );
  }

  updateClient( client : IClient ) {
    return this.dbService.updateDocument<IClient>( this.collectionName, client );
  }

  deleteClient( client : IClient ){
    return this.dbService.deleteDocument(this.collectionName, client );
  }
}
