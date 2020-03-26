import { IModel } from './IModel';

export interface IDrink extends IModel {
    Amount : number;
    Name : string;
    Photo : string;
    Image? : any;
    Price : number;
}

export class Drink implements IDrink {
    Id? : string;
    Amount : number;
    IsDeleted : boolean = false;
    Name : string;
    Photo : string;
    Image? : any;
    Price : number;

    constructor( 
        amount : number, 
        name : string, 
        price : number 
    ) {
        this.Amount = amount;
        this.Name = name;
        this.Price = price;
    }
}