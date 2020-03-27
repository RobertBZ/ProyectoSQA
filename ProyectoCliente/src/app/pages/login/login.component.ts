import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor( private authService : AuthService, private router: Router) {
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
    if(this.loginForm.status === 'VALID'){
      this.authService
      .signIn( this.Email.value, this.Password.value )
      .then(() => {
        this.router.navigate(['/home/customers']);
        console.log("Signed In", this.authService.userData);
      })
      .catch(err => {
        console.log('Something is wrong:',err.message );
      });
    }
    else{
      this.Email.touched = true;
      this.Password.touched = true;
    }
  }

}
