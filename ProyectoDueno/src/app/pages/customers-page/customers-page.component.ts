import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/IClient';

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.scss']
})
export class CustomersPageComponent implements OnInit {

  customersColumns: string[] = ['name', 'lastname', 'email', 'credit'];
  customers : Observable<Client[]>;
  constructor(
    private customerService : CustomerService
  ) { }

  ngOnInit() {
    this.customers = this.customerService.readClients();
  }
  showData(data: any){
    console.log(data);
  }

}
