import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomersPageComponent } from 'src/app/pages/customers-page/customers-page.component';
import { Client } from 'src/app/models/IClient';

@Component({
  selector: 'app-customer-modal',
  templateUrl: './customer-modal.component.html',
  styleUrls: ['./customer-modal.component.scss']
})
export class CustomerModalComponent implements OnInit {

  clientForm: any;

  constructor(
    private customerService: CustomerService,
    public dialogRef: MatDialogRef<CustomersPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if(this.data.isnew == true){
      this.clientForm = new FormGroup({
        Email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9-]+\x2e[a-z]{2,4}')]),
        Password: new FormControl('', [Validators.required]),
        Name: new FormControl('', [Validators.required]),
        Lastname: new FormControl('', [Validators.required]),
        Username: new FormControl('', [Validators.required]),
        Credit: new FormControl('', [Validators.required]),
      });
    }else{
      this.clientForm = new FormGroup({
        Email: new FormControl(data.cust.Email, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9-]+\x2e[a-z]{2,4}')]),
        Password: new FormControl(''),
        Name: new FormControl(data.cust.Name, [Validators.required]),
        Lastname: new FormControl(data.cust.Lastname, [Validators.required]),
        Username: new FormControl(data.cust.Username, [Validators.required]),
        Credit: new FormControl(data.cust.Credit, [Validators.required]),
      });
    }
    
  }

  get Name() {
    return this.clientForm.get("Name");
  }

  get Lastname() {
    return this.clientForm.get("Lastname");
  }
  get Email() {
    return this.clientForm.get("Email");
  }
  get Username() {
    return this.clientForm.get("Username");
  }
  get Credit() {
    return this.clientForm.get("Credit");
  }
  get Password() {
    return this.clientForm.get("Password");
  }

  ngOnInit() {
    console.log(this.data.cust);
  }

  acction(){
    if(this.data.isnew == true){
      this.createClient();
    }
    else{
      this.editClient();
    }
  }

  createClient() {
    if (this.clientForm.status === 'VALID') {
      var client = { 
        Email: this.Email.value,
        Lastname: this.Lastname.value,
        Name: this.Name.value, 
        Username: this.Username.value, 
        IsDeleted : false, 
        Credit: this.Credit.value
      };
      this.customerService
        .createClient( client, this.Password.value).then(res => {
          console.log("se ah registrado exitosamente");
        }).catch(err => {
          console.log("Ocurrio un error en al registrar");
        })
    }
    else {
      this.Email.touched = true;
      this.Name.touched = true;
      this.Lastname.touched = true;
      this.Username.touched = true;
      this.Password.touched = true;
      this.Credit.touched = true;
    }
  }

  editClient(){
    if (this.clientForm.status === 'VALID') {
      var client = { 
        Id: this.data.cust.Id,
        Email: this.Email.value,
        Lastname: this.Lastname.value,
        Name: this.Name.value, 
        Username: this.Username.value, 
        IsDeleted : false, 
        Credit: this.Credit.value
      };
      this.customerService
        .updateClient(client).then(res => {
          console.log("se ah editado");
        }).catch(err => {
          console.log("Ocurrio un error al editar");
        })
    }
    else {
      this.Email.touched = true;
      this.Name.touched = true;
      this.Lastname.touched = true;
      this.Username.touched = true;
      this.Credit.touched = true;
    }
  }

}
