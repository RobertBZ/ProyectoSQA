import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: BehaviorSubject<any>;

  constructor( private angularFireAuth : AngularFireAuth ) { 
    angularFireAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        this.userData = new BehaviorSubject<any>({
          DisplayName : user.displayName,
          email : user.email,
          emailVerified : user.emailVerified,
          photoURL : user.photoURL,
          isAnonymous : user.isAnonymous,
          uid : user.uid,
          providerData : user.providerData
        });
      } else {
        this.userData = null;
      }
    });
    angularFireAuth.auth.useDeviceLanguage();
    console.log(this.userData);
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
