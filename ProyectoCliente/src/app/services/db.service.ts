import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IModel } from './../models/IModel';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  constructor(private firestore: AngularFirestore) { }

  

}
