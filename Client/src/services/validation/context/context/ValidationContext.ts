import { IValidationContextActions }            from '../interfaces/IValidationContextActions';
import { IValidationContextState }              from '../interfaces/IValidationContextState';
import React                                    from 'react';
import ValidationFieldModel                     from '../models/ValidationFieldModel';
import ValidationGroup                          from '../../ValidationGroup';
import ValidationField                          from '../../ValidationField';

export const ValidationContext = React.createContext<IValidationContextState & IValidationContextActions>({
     group : null,
     fields : new Array<ValidationFieldModel>(),
     setGroup: (group: ValidationGroup) => {},
     addField: (field: ValidationField) => {}
});
