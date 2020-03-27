import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { Client } from 'src/app/models/IClient';

@Component({
  selector: 'app-customer-modal',
  templateUrl: './customer-modal.component.html',
  styleUrls: ['./customer-modal.component.scss']
})
export class CustomerModalComponent implements OnInit {

  clientForm: any;

  constructor(
    private customerService: CustomerService
  ) {
    this.clientForm = new FormGroup({
      Email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9-]+\x2e[a-z]{2,4}')]),
      Password: new FormControl('', [Validators.required]),
      Name: new FormControl('', [Validators.required]),
      Lastname: new FormControl('', [Validators.required]),
      Username: new FormControl('', [Validators.required]),
      Credit: new FormControl('', [Validators.required]),
    });
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
      console.log("error")
    }
  }

}
