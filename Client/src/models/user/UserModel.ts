import { IApiModel }                            from './../interfaces/IApiModel';


export default class UserModel implements IApiModel {

    public static className = "UserModel"

    public id: Number;
    public userName: String;
    public forename: String;
    public surname: String;
    public password: String;
    
    constructor(username?: String, password?: String ) {
        this.userName = username || "";
        this.password = password || "";
        this.forename = "";
        this.surname = "";
        this.id = 0;
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