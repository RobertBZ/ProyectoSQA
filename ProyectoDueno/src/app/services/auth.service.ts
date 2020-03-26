import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: Observable<firebase.User>;

  constructor( private angularFireAuth : AngularFireAuth ) { 
    this.userData = angularFireAuth.authState;
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
