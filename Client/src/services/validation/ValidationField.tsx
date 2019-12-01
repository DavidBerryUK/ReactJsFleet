import { IValidationContextActions }            from './context/interfaces/IValidationContextActions';
import { IValidationContextState }              from './context/interfaces/IValidationContextState';
import { IValidationRuleProperties }            from './interfaces/IValidationRuleProperties';
import { ValidationContext }                    from "./context/context/ValidationContext"
import IValidationRule                          from './interfaces/IValidationRule';
import ValidationBase                           from "./ValidationBase"
import React                                    from 'react';
import ReactDOM from 'react-dom';

export default class ValidationField extends ValidationBase<IValidationRuleProperties, IValidationContextState & IValidationContextActions> {

    static contextType = ValidationContext;

    public rules : Array<IValidationRule> = new Array<IValidationRule>();
  
    componentDidMount() {
        this.rules = this.props.rules;        
        this.context.addField(this);

        this.parseChildControls()
    }

    render() {
        return (            
            this.props.children
        )
    }

    private parseChildControls() {
        const children = React.Children.toArray(this.props.children)                
        if ( children.length < 0 ) {
            return;
        }
        if ( children.length > 1 ) {
            throw new Error('Only 1 child element may exist in a ValidationField');
        }
        // const child = children[0] as React.ReactFragment;
        var element = ReactDOM.findDOMNode(this) as Element
        
        console.log(element.tagName);
        console.log(element.childElementCount);

        
        
    }
}