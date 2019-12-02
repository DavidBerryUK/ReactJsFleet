import { Component }                            from 'react';
import { IValidatedUIControlProperties }        from './interfaces/IValidatedUIControlProperties';
import { IValidatedUIControlState }             from './interfaces/IValidateUIControlState';
import { TextFieldProps }                       from '@material-ui/core/TextField';
import { ValidationContext }                    from "../context/context/ValidationContext"
import React                                    from 'react';
import RuleCollection                           from '../rules/RuleCollection';
import TextField                                from '@material-ui/core/TextField';

export default class ValidatedTextField extends Component<TextFieldProps & IValidatedUIControlProperties  ,IValidatedUIControlState>  {

    static contextType = ValidationContext;

    state = {
        text:"",
        isValid: true,
        validationError: ''
    }

    public rules : RuleCollection = new RuleCollection();
    public name : string = "";

    UNSAFE_componentWillMount() {
        console.log("ValidatedTextField:componentDidMount");
        this.rules =  new RuleCollection(this.props.rules);
        this.name = this.props.name as string;
        this.context.addField(this);
    }
        
    render() {
        // remove properties not to be passed down to child
        //
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

    handleOnChangeEvent(event : React.ChangeEvent) {
        // 
        // obtain new value
        //
        const typedEvent = event as React.ChangeEvent<HTMLInputElement>    
        const text = typedEvent.target.value;
        //
        // run validation rules
        //
        const isValid = this.rules.evaluateRules(this.props.label as string, text);
        let message = "";
        if ( !isValid ) {            
            message = this.rules.validationMessage;
        }
        //
        // feedback 
        //
        this.setState (
                {
                    text : text, 
                    isValid : isValid,
                    validationError : message
                },
                 () =>{
            if (this.props.onFieldUpdated) {
                this.props.onFieldUpdated(this);
                this.context.evaluateFormState();
            }
        });        
    }
}
