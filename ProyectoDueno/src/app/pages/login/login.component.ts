import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor( private authService : AuthService ) { }

  ngOnInit() {
  }

  signIn() {
    this.email = ''; 
    this.password = '';
  }

  signOut() {
    this.authService.SignOut();
  }

}
