import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IModel } from './../models/IModel';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  constructor(private firestore: AngularFirestore) { }

  createDocument<T extends IModel>(collectionName : string, element : T){
    return this.firestore.collection<T>(collectionName).add({...element});
  }
  createDocumentWithID<T extends IModel>(collectionName : string, element: T, elementID : string){
    return this.firestore.collection<T>(collectionName).doc(elementID).set(element);
  }
  updateDocument<T extends IModel>(collectionName: string, id: string, data : T){
    return this.firestore.doc<T>(collectionName + '/' + id).update({...data});
  }
  deleteDocument<T extends IModel>(collectionName : string, data : T){
    data.IsDeleted = true;
    return this.updateDocument<T>(collectionName, data.Id, data);
  }
  getDocuments<T extends IModel>(collectionName : string) {
    return this.firestore.collection<T>(collectionName).snapshotChanges().pipe(map(data => {
      return data.map(e => {
        const Id = e.payload.doc.id;
        const t = e.payload.doc.data() as T;
        return { Id, ...t };
      }).filter(element => !element.IsDeleted);
    }));
  }

}
