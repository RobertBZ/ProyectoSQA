import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
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
