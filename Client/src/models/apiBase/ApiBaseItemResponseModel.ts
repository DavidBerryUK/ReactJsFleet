import ValidationMessage                        from "../validation/ValidationMessage";

export default class ApiBaseItemResponseModel<T> {

    public entity?: T;
    public validationMessages : Array<ValidationMessage>;
    public success: Boolean;
    public errorMessage: String;
    
    constructor() {
        this.validationMessages = new Array<ValidationMessage>();
        this.success = false;
        this.errorMessage = "";
    }
}