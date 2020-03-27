import { Injectable } from '@angular/core';
import { IClient } from './../models/IClient';
import { DbService } from './db.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  collectionName : string = 'Clients';

  constructor(
    private dbService : DbService,
    private authService : AuthService
  ) { }

  createClient( client : IClient, password : any ) {
    return this.authService.registryUser(client.Email, password).then(
      value => {
        client.Id = value.user.uid;
        this.dbService.createDocumentWithID<IClient>( this.collectionName, client );
    });
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
