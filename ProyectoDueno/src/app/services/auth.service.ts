import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private angularFireAuth : AngularFireAuth ) { 
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

  registryUser(email : string, password : string) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password);
  }

}
