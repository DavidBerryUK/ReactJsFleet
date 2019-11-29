import { Component }                            from 'react';
import { IValidationContextActions }            from '../interfaces/IValidationContextActions';
import { IValidationContextState }              from '../interfaces/IValidationContextState';
import { ValidationContext }                    from '../context/ValidationContext';
import ActionAddValidationField                 from '../actions/ActionAddValidationField';
import ActionSetValidationGroup                 from '../actions/ActionSetValidationGroup';
import React                                    from 'react';
import ValidationGroupModel                     from '../../models/ValidationGroupModel';

class ValidationState extends Component<any,IValidationContextState> implements IValidationContextActions {

  setGroup(): void {
    let action = new ActionSetValidationGroup();
    action.execute();
  }

  addField(): void {
    let action = new ActionAddValidationField();
    action.execute();
  }
  
  state = {
    group : ValidationGroupModel
  };

  render() {
    return (
      <ValidationContext.Provider
        value={{
        }}
      >
        {this.props.children}
      </ValidationContext.Provider>
    );
  }
}

export default ValidationState;