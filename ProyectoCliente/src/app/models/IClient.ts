import { IModel } from './IModel';

export interface IClient extends IModel {
    Credit : number;
    Email : string;
    Lastname : string;
    Name : string;
    Username : string;
}

export class Client implements IClient {
    Id?: string;
    Credit : number = 0;
    Email : string;
    IsDeleted : boolean = false;
    Lastname : string;
    Name : string;
    Username : string;

    constructor(  
        email : string, 
        lastname : string, 
        name : string, 
        username : string 
    ) {
        this.Email = email;
        this.Lastname = lastname;
        this.Name = name;
        this.Username = username;
    }
}
