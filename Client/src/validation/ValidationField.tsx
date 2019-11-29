import { Component }                            from 'react';
import { IValidationRuleProperties }            from './interfaces/IValidationRuleProperties';
import IValidationRule                          from './interfaces/IValidationRule';
import ValidationGroup from './ValidationGroup';

export default class ValidationField extends Component<IValidationRuleProperties, any> {

    public rules : Array<IValidationRule> = new Array<IValidationRule>();
    public group? : ValidationGroup;

    componentDidMount() {
        this.rules = this.props.rules;
        // console.log("--------");
        // console.log(this.rules);
    }

    render() {
        return (            
            this.props.children
        )
    }
}