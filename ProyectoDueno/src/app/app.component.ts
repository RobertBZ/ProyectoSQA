import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProyectoDueno';

  constructor(public authService: AuthService, private router: Router) {
    if(this.authService.userData){
      this.router.navigate(['/customers']);
    }
    else{
      this.router.navigate(['/login']);
    }
  }

  signOut(){
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
