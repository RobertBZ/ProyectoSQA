import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor() { }

  Client : any =
  { "Name" : "Jesus", "LastName" : "Aguilar", "Credits" : "2000"}

  ngOnInit() {
  }

}
