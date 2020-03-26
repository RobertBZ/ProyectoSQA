import { Injectable } from '@angular/core';
import { Client, IClient } from './../models/IClient';
import { DBService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private dbService : DBService) { }

  

}
