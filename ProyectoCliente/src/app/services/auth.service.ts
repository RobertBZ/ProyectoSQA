import { Observable } from 'rxjs';
import { ClientsService } from './clients.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Client } from '../models/IClient';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userID: string;
  userData: Observable<Client>;

  constructor( private angularFireAuth : AngularFireAuth ) { 
    angularFireAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        this.userID = user.uid;
      } else {
        this.userID = null;
      }
    });
    angularFireAuth.auth.useDeviceLanguage();
  }
  
  signIn(email: string, password: string) {
    return this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password);
  }

  signOut() {
    return this.angularFireAuth
      .auth
      .signOut();
  } 

  sendEmailVerification(email) {
    return this.angularFireAuth
      .auth
      .sendPasswordResetEmail(email);
  }

}
