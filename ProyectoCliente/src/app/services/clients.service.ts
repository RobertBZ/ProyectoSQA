import { Injectable } from '@angular/core';
import { Client, IClient } from './../models/IClient';
import { DBService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  collectionName : string = 'Clients';

  constructor(private dbService : DBService) { }

  createClient( client : IClient, id : string ) {
    return this.dbService.createDocumentWithID<IClient>( this.collectionName, client );
  }

  readClients() {
    return this.dbService.readDocuments<IClient>( this.collectionName );
  }

  updateClient( id : string, client : IClient ) {
    return this.dbService.updateDocument<IClient>( this.collectionName, client );
  }

  deleteClient( client : IClient ){
    return this.dbService.deleteDocument(this.collectionName, client );
  }

}
