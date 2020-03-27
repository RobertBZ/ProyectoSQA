import { Client } from './../../models/IClient';
import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';


@Component({
  templateUrl: './drinks-list.component.html',
  styleUrls: ['./drinks-list.component.scss']
})
export class DrinksListComponent implements OnInit {
  public isMobile: boolean = false;
  Bebidas : any =
  [
    {"Nombre" : "Fanta", "URLFoto" : "https://upload.wikimedia.org/wikipedia/commons/0/03/Logo_Fanta_2016.png"},
    {"Nombre" : "Coca-Cola", "URLFoto" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Coca-Cola_bottle_cap.svg/1200px-Coca-Cola_bottle_cap.svg.png"},
    {"Nombre" : "Pepsi", "URLFoto" : "https://vignette.wikia.nocookie.net/mensajessubliminales/images/5/58/2000px-Pepsi_logo_2014.svg.png/revision/latest?cb=20181128210951&path-prefix=es"},
    {"Nombre" : "Sprite", "URLFoto" : "https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c1f2.png"},
    {"Nombre" : "Dr. Pepper", "URLFoto" : "https://upload.wikimedia.org/wikipedia/en/thumb/1/19/Dr_Pepper_modern.svg/1200px-Dr_Pepper_modern.svg.png"},
    {"Nombre" : "Fanta", "URLFoto" : "https://upload.wikimedia.org/wikipedia/commons/0/03/Logo_Fanta_2016.png"},
    {"Nombre" : "Coca-Cola", "URLFoto" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Coca-Cola_bottle_cap.svg/1200px-Coca-Cola_bottle_cap.svg.png"},
    {"Nombre" : "Pepsi", "URLFoto" : "https://vignette.wikia.nocookie.net/mensajessubliminales/images/5/58/2000px-Pepsi_logo_2014.svg.png/revision/latest?cb=20181128210951&path-prefix=es"},
    {"Nombre" : "Sprite", "URLFoto" : "https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c1f2.png"},
    {"Nombre" : "Dr. Pepper", "URLFoto" : "https://upload.wikimedia.org/wikipedia/en/thumb/1/19/Dr_Pepper_modern.svg/1200px-Dr_Pepper_modern.svg.png"},
  ];
  Client : any =
  { "Name" : "Jesus", "LastName" : "Aguilar", "Credits" : "2000"}

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  ngOnInit() {

  }

}