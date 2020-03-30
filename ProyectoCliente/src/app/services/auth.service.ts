import { Observable, of } from 'rxjs';
import { ClientsService } from './clients.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Client } from '../models/IClient';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: Observable<Client | null>;

  constructor( private angularFireAuth : AngularFireAuth, private clientsService : ClientsService ) { 
    angularFireAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        this.userData = this.clientsService.readClient(user.uid);
      } else {
        this.userData = of(null);
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

  sendEmailVerification( email ) {
    return this.angularFireAuth
      .auth
      .sendPasswordResetEmail(email);
  }

}
