import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { UsageService } from './usage.service';
import { Usage } from './../models/IUsage';

@Injectable({
  providedIn: 'root'
})
export class UsageValidatorService {

  usage : Usage;

  constructor( private authService : AuthService, private usageService : UsageService) { }

  validatePurchase( option : any, drink : any )
  {
    this.authService.userData.subscribe(user => {
      if(user)
      {
        if(user.Credit >= option.Price)
        {
          user.Credit -= option.Price;
          this.usage = new Usage ( 
            drink.Amount, 
            user.Id, 
            drink.Name, 
            new Date, 
            drink.Photo, 
            option.Price
          );
          this.usageService.createUsage(this.usage);
        }
      }
    });
  }
}
