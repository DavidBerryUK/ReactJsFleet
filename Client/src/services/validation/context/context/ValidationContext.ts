import { IValidationContextActions }            from '../interfaces/IValidationContextActions';
import { IValidationContextState }              from '../interfaces/IValidationContextState';
import React                                    from 'react';
import ValidatedTextField                       from '../../controls/ValidatedTextField';

export const ValidationContext = React.createContext<IValidationContextState & IValidationContextActions>({
     fields : new Array<ValidatedTextField>(),
     isFormValid: true,
     fieldsValidCount: 0,
     fieldsInvalidCount : 0,
     hasBeenFullyValidated: false,
     addField: (field: ValidatedTextField) => {},
     evaluateFormState: () => {},
});
