import { Injectable } from '@angular/core';
import { IClient } from './../models/IClient';
import { DBService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  collectionName : string = 'Clients';

  constructor(private dbService : DBService) { }

  createClient( client : IClient ) {
    return this.dbService.createDocumentWithID<IClient>( this.collectionName, client );
  }

  readClients() {
    return this.dbService.readDocuments<IClient>( this.collectionName );
  }

  readClient(Id : string) {
    return this.dbService.readDocumentsByID<IClient>( this.collectionName , Id );
  }

  updateClient( client : IClient ) {
    return this.dbService.updateDocument<IClient>( this.collectionName, client );
  }

  deleteClient( client : IClient ){
    return this.dbService.deleteDocument(this.collectionName, client );
  }

}
