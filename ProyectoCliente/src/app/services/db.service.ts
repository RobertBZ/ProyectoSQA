import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IModel } from './../models/IModel';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  constructor(private firestore: AngularFirestore) { }

  createDocument<T extends IModel>( 
    collectionName : string, 
    data : T 
  ) {
    return this.firestore.collection<T>( collectionName ).add({ ...data });
  }

  createDocumentWithID<T extends IModel>( 
    collectionName : string, 
    data: T
  ) {
    return this.firestore.collection<T>( collectionName ).doc( data.Id ).set( data );
  }

  readDocuments<T extends IModel>(
    collectionName : string
  ) {
    return this.firestore.collection<T>( collectionName ).snapshotChanges().pipe(map(data => {
      return data.map(e => {
        const Id = e.payload.doc.id;
        const t = e.payload.doc.data() as T;
        return { Id, ...t };
      }).filter( element => !element.IsDeleted );
    }));
  }

  updateDocument<T extends IModel>(
    collectionName: string, 
    data : T
  ){
    return this.firestore.doc<T>(collectionName + '/' + data.Id).update({...data});
  }

  deleteDocument<T extends IModel>( 
    collectionName : string, 
    data : T
  ) {
    data.IsDeleted = true;
    return this.updateDocument<T>(collectionName, data);
  }

}
