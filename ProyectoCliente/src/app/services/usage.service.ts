import { Injectable } from '@angular/core';
import { Usage, IUsage } from './../models/IUsage';
import { DBService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class UsageService {

  constructor(private dbService : DBService) { }

  

}
