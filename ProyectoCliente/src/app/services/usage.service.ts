import { Injectable } from '@angular/core';
import { IUsage } from './../models/IUsage';
import { DBService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class UsageService {

  collectionName : string = 'Usage';

  constructor(private dbService : DBService) { }

  createUsage( usage : IUsage ) {
    return this.dbService.createDocument<IUsage>( this.collectionName, usage );
  }

  readUsage() {
    return this.dbService.readDocuments<IUsage>( this.collectionName );
  }

  updateUsage( usage : IUsage ) {
    return this.dbService.updateDocument<IUsage>( this.collectionName, usage );
  }

  deleteUsage( usage : IUsage ){
    return this.dbService.deleteDocument(this.collectionName, usage );
  }
}
