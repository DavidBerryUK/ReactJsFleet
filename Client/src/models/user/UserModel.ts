import { IApiModel }                            from './../interfaces/IApiModel';
import { IDispatchObject }                      from '../../services/applicationContext/ApplicationContext';


export default class UserModel implements IApiModel , IDispatchObject {

    public static className = "UserModel"

    public id: Number;
    public userName: string;
    public forename: string;
    public surname: string;
    public password: string;
    
    constructor(username?: string, password?: string ) {
        this.userName = username || "";
        this.password = password || "";
        this.forename = "";
        this.surname = "";
        this.id = 0;
    }

    public get initals(): string {
        return (this.forename.substr(0,1) +
               this.surname.substr(0,1)).toUpperCase();
    }


    public get entityName(): string {
        return UserModel.className;
    }

    public get entityKey(): string {
        return `${this.id}`;
    }

    public get entityValue(): string {
        return `${this.userName}`;
    }

    public get entitySortValue(): any {
        return `${this.surname} ${this.forename}`;
    }
}