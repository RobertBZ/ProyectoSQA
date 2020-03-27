import { IModel } from './IModel';

export interface IDrink extends IModel {
    AmountOptions : {
        Amount: number,
        Price: number
    }[];
    Name : string;
    Photo : string;
    Image? : any;
}

export class Drink implements IDrink {
    Id? : string;
    AmountOptions : {
        Amount: number,
        Price: number
    }[];
    IsDeleted : boolean = false;
    Name : string;
    Photo : string;
    Image? : any;

    constructor( 
        amountOptions : any, 
        name : string, 
    ) {
        this.AmountOptions = amountOptions;
        this.Name = name;
    }
}