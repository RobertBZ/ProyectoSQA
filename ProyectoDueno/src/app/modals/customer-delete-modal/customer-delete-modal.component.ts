import { Component, OnInit, Inject } from '@angular/core';
import { CustomersPageComponent } from 'src/app/pages/customers-page/customers-page.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CustomerService } from 'src/app/services/customer.service';
import { Client } from 'src/app/models/IClient';

@Component({
  selector: 'app-customer-delete-modal',
  templateUrl: './customer-delete-modal.component.html',
  styleUrls: ['./customer-delete-modal.component.scss']
})
export class CustomerDeleteModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CustomersPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Client,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
  }

  deleteCustormer(type : string) {
    if(type == 'si'){
      this.customerService.deleteClient(this.data);
      this.dialogRef.close();
    }
    else{
      this.dialogRef.close();
    }
  }

  closeModal(){
    this.dialogRef.close();
  }
  
}
