/**
 * Simple POJO class to hold a list of validation
 * messages that may be passed back from a API call.
 *
 * Note that the field should contain the name is
 * used to indicate which control on the screen the
 * validation message should be assigned to, the application
 * uses the vee-validate package so the name should match the
 * data-vv-name applied to the field
 *
 * e.g. field='Category name' where defined in
 * the control as data-vv-name="Category Name".
 *
 * @export
 * @class ValidationMessage
 */
export default class ValidationMessage {
    public field: string;
    public message: string;

    constructor() {
        this.field = '';
        this.message = '';
    }
}