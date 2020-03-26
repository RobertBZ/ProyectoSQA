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

  SignIn(email: string, password: string) {
    this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Successfully signed in!');
      })
      .catch(err => {
        console.log('Something is wrong:',err.message );
      });
  }

  SignOut() {
    this.angularFireAuth
      .auth
      .signOut();
  } 

  SendEmailVerification(email) {
    this.angularFireAuth
      .auth
      .sendPasswordResetEmail(email)
      .then(() => {
        console.log('Email sent');
      }).catch((err) => {
        console.log('An error happened:', err.message );
      });
  }

}
