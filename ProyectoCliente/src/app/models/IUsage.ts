import { IModel } from './IModel';
import * as firebase from 'firebase/app';

export interface IUsage extends IModel {
    Amount: number;
    ClientID: string;
    Name: string;
    OrderDate: any;
    Photo: string;
    Price: number;
}

export class Usage implements IUsage {
    Id?: string;
    Amount: number;
    ClientID: string;
    IsDeleted: boolean = false;
    Name: string;
    OrderDate: any = firebase.firestore.FieldValue.serverTimestamp;
    Photo: string;
    Price: number;

    constructor( 
        amount: number, 
        clientID: string, 
        name: string, 
        orderDate: Date, 
        photo: string, 
        price: number
    ) {
        this.Amount = amount;
        this.ClientID = clientID;
        this.Name = name;
        this.OrderDate = orderDate;
        this.Photo = photo;
        this.Price = price;
    }
}