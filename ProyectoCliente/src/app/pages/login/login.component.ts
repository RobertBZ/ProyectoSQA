import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ClientsService } from 'src/app/services/clients.service';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/IClient';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor( private authService : AuthService, private router: Router,  private clientService : ClientsService) {
    
  }

  ngOnInit() {
  }

  // Funciones de autentificacion
  signIn() {
    this.authService
      .signIn( "j.andrescastillo.711@gmail.com", "123456" )
      .then((data) => {
        this.router.navigate(['/home/drinks']);
      })
      .catch(err => {
        console.log('Something is wrong:',err.message );
      });
  }

}
