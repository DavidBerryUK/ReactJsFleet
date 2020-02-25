import UserModel from "../models/user/UserModel";

export default class AuthenticationApplicationState { 
    loggedIn : boolean = false;
    user?: UserModel;        
}