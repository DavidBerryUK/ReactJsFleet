import { IValidationContextActions }            from '../interfaces/IValidationContextActions';
import { IValidationContextState }              from '../interfaces/IValidationContextState';
import React                                    from 'react';
import ValidationFieldModel                     from '../models/ValidationFieldModel';
import ValidationField                          from '../../ValidationField';

export const ValidationContext = React.createContext<IValidationContextState & IValidationContextActions>({
     fields : new Array<ValidationFieldModel>(),
     addField: (field: ValidationField) => {}
});
