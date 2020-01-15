import ValidationMessage                        from "../validation/ValidationMessage";

export default class ApiBaseCollectionResponseModel<T> {

    public entities?: Array<T>;
    public validationMessages : Array<ValidationMessage>;
    public success: Boolean;
    public errorMessage: String;
    public pageNumber : number = 0;
    public totalPages : number =0;
    public totalRows : number = 0;
    public rowsPerPage : number = 0;
    
    constructor() {
        this.validationMessages = new Array<ValidationMessage>();
        this.success = false;
        this.errorMessage = "";
    }
}