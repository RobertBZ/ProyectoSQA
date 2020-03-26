import { IModel } from './IModel';

export interface IClient extends IModel {
    Credit : number;
    Email : string;
    LastName : string;
    Name : string;
    Username : string;
}

export class Client implements IClient {
    Id?: string;
    Credit : number = 0;
    Email : string;
    IsDeleted : boolean = false;
    LastName : string;
    Name : string;
    Username : string;

    constructor(  
        email : string, 
        lastName : string, 
        name : string, 
        username : string 
    ) {
        this.Email = email;
        this.LastName = lastName;
        this.Name = name;
        this.Username = username;
    }
}
