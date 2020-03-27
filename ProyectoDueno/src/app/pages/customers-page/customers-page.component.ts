import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/IClient';
import { MatDialog } from '@angular/material';
import { CustomerModalComponent } from 'src/app/modals/customer-modal/customer-modal.component';

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.scss']
})
export class CustomersPageComponent implements OnInit {

  customersColumns: string[] = ['name', 'lastname', 'email', 'credit'];
  customers : Observable<Client[]>;
  constructor(
    private customerService : CustomerService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.customers = this.customerService.readClients();
  }
  
  showData(data: any){
    console.log(data);
  }

  showCreateCustomerModal() {
    this.dialog.open(CustomerModalComponent, {
      width: '500px',
      data: { state: true }
    });
  }
}
