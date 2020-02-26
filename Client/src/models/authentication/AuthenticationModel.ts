import { IApiModel }                            from './../interfaces/IApiModel';
import UserModel                                from '../user/UserModel';

export default class AuthenticationModel  implements IApiModel {

    public static className = "AuthenticationModel"

    public token: string;
    public user? : UserModel;
    public permissions : Array<string>;

    constructor(token? : string) {
        this.token = token || "";      
        this.permissions = new Array<string>();  
    }

    public get entityName(): string {
        return AuthenticationModel.className;
    }

    public get entityKey(): string {
        return `${this.token}`;
    }

    public get entityValue(): string {
        return this.token;
    }

    public get entitySortValue(): any {
        return this.token;
    }
}