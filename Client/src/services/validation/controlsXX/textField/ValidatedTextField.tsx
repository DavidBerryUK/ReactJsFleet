import { Component }                            from 'react';
import { IValidatedUIControlProperties }        from '../interfaces/IValidatedUIControlProperties';
import { IValidatedUIControlState }             from '../interfaces/IValidateUIControlState';
import { TextFieldProps }                       from '@material-ui/core/TextField';
import { ValidationContext }                    from "../../context/context/ValidationContext"
import React                                    from 'react';
import RuleCollection                           from '../../rules/RuleCollection';
import TextField                                from '@material-ui/core/TextField';

// NOTE - MUCH OF THIS CAN BE MOVED TO A BASE CLASS - THIS IS 
//        CURRENTLY A PROOF OF CONCEPT, BUT WILL ADD ADDITIONAL CONTROLS SUCH AS
//        DROP DOWNS AND SWITCHES WHICH WILL ALSO BE PART OF THE FORM
//
// A Wrapped TextField that handles validation and form 
// model synchronization
//
// * Maintains own value state
//
export default class ValidatedTextField extends Component<TextFieldProps & IValidatedUIControlProperties  ,IValidatedUIControlState>  {

    static contextType = ValidationContext;

    // State of the control, holds state of 
    // * Value 
    // * Is Control Valid
    // * Current validation error message
    state = {
        text: "",
        isValid: true,
        validationError: ''
    }

    // List of validation rules passed in as a property
    public rules : RuleCollection = new RuleCollection('');

    // Name of the property
    public name : string = "";

    // Callback when the control loads.
    // This registers the control with the parent ValidationState / ValidationContext
    //
    public UNSAFE_componentWillMount() {        
        this.name = this.props.name as string;
        this.rules =  new RuleCollection(this.props.label as string, this.props.rules);        
        this.context.addField(this);
    }

    // Validate method, this is called by the parent ValidationState
    // when evaluating the entire form
    public validate() : Boolean {                

        // Determine if the control is valid
        //
        const isValid = this.rules.evaluateRules( this.state.text);
        let message = this.rules.validationMessage;
        


        // update the validation status has changed, 
        //  update the state
        this.setState (
            {
                isValid : isValid,
                validationError : message
            },
             () =>{
                 
        // state has been updated
        
        if (this.props.onFieldUpdated) {            
            this.props.onFieldUpdated(this);            
        }
            this.context.onFieldUpdated(this);
        });       

        

        return isValid;
    }

    // Callback when the user changed the state of the UI control
    //
    handleOnChangeEvent(event : React.ChangeEvent) {
        // 
        // obtain new value
        //
        const typedEvent = event as React.ChangeEvent<HTMLInputElement>    
        const text = typedEvent.target.value;

        // update text value
        //
        this.setState(() => {          
            return {text : text}
          },() => {
            //
            // run validation rules 
            //  AFTER THE STATE HAS BEEN UPDATED
            //  ================================
            this.validate();
        });         
    }

    // UI 
    // Render the TextField component which is part of https://material-ui.com/
    // wire up error and helperText which is used for displaying 
    // validation messages
    //
    render() {
        // remove properties not to be passed down to child      
        const childProps = {...this.props};
        delete childProps.onFieldUpdated;
        
        return (
            <TextField
                {...childProps}
                error = {!this.state.isValid}
                helperText = {this.state.validationError}
                onChange={(event) => { this.handleOnChangeEvent(event) }}
                value={this.state.text}
            />
        );
    }
}
