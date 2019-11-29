import { IValidationRuleProperties }            from './interfaces/IValidationRuleProperties';
import IValidationRule                          from './interfaces/IValidationRule';
import ValidationBase                           from "./ValidationBase"
import { IValidationContextState }              from './context/interfaces/IValidationContextState';
import { IValidationContextActions }            from './context/interfaces/IValidationContextActions';
import { ValidationContext }                    from "./context/context/ValidationContext"

export default class ValidationField extends ValidationBase<IValidationRuleProperties, IValidationContextState & IValidationContextActions> {

    static contextType = ValidationContext;

    public rules : Array<IValidationRule> = new Array<IValidationRule>();
  
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