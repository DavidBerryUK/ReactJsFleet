import { IValidationContextActions }            from '../interfaces/IValidationContextActions';
import { IValidationContextState }              from '../interfaces/IValidationContextState';
import React                                    from 'react';
import ValidatedTextField                       from '../../controls/ValidatedTextField';

export const ValidationContext = React.createContext<IValidationContextState & IValidationContextActions>({
     fields : new Array<ValidatedTextField>(),
     isFormValid: true,
     hasBeenFullyValidated: false,
     addField: (field: ValidatedTextField) => {},
     evaluateFormState: () => {},
});
