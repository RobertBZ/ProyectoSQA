import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from '../models/IClient';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  client : Observable<Client>;
  constructor(private authService: AuthService, private router: Router) {
   }

  ngOnInit() {
    this.client = this.authService.userData;
  }

  signOut(){
    this.authService.signOut().then(() => {
      this.router.navigate(['/login']);
      console.log( "Signed Out" );
    })
    .catch(err => {
      console.log( 'Something is wrong:', err.message );
    });
  }

}
