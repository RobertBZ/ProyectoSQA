import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private authService : AuthService, private router: Router) {
    
  }

  ngOnInit() {
  }

  // Funciones de autentificacion
  signIn() {
    this.authService
      .signIn( "j.andrescastillo.711@gmail.com", "123456" )
      .then(() => {
        this.router.navigate(['/home/drinks']);
      })
      .catch(err => {
        console.log('Something is wrong:',err.message );
      });
  }

}
