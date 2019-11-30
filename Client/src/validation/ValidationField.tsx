import { IValidationContextActions }            from './context/interfaces/IValidationContextActions';
import { IValidationContextState }              from './context/interfaces/IValidationContextState';
import { IValidationRuleProperties }            from './interfaces/IValidationRuleProperties';
import { ValidationContext }                    from "./context/context/ValidationContext"
import IValidationRule                          from './interfaces/IValidationRule';
import ValidationBase                           from "./ValidationBase"

export default class ValidationField extends ValidationBase<IValidationRuleProperties, IValidationContextState & IValidationContextActions> {

    static contextType = ValidationContext;

    public rules : Array<IValidationRule> = new Array<IValidationRule>();
  
    componentDidMount() {
        this.rules = this.props.rules;
        this.context.addField(this);
    }

    render() {
        return (            
            this.props.children
        )
    }
}