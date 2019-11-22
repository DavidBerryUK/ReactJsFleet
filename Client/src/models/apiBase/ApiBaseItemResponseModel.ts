import ValidationMessages from "../validation/ValidationMessage";

export default class ApiBaseItemResponseModel<T> {

    public entity?: T;
    public validationMessages : Array<ValidationMessages>;
    public success: Boolean;
    public errorMessage: String;
    
    constructor() {
        this.validationMessages = new Array<ValidationMessages>();
        this.success = false;
        this.errorMessage = "";
    }
}