import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  loginForm: any;

  constructor( private authService : AuthService ) {
    this.loginForm = new FormGroup({
      Email: new FormControl('',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9-]+\x2e[a-z]{2,4}')]),
      Password: new FormControl('',[Validators.required])
    }); 
  }
  ngOnInit() {
  }
  get Email() {
    return this.loginForm.get("Email");
  }
  get Password() {
    return this.loginForm.get("Password");
  }
  // Funciones de autentificacion
  signIn() {
    this.email = ''; 
    this.password = '';
  }
}