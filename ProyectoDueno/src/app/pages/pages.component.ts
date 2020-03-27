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
    console.log("Hola");
    this.authService.signOut().then(() => {
      this.authService.userData = null;
      this.router.navigate(['/login']);
      console.log("Sesion cerrada ", this.authService.userData);
    })
    .catch(err => {
      console.log('Something is wrong:',err.message );
    });
  }

}
