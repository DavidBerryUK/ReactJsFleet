import { IValidationContextActions }            from '../interfaces/IValidationContextActions';
import { IValidationContextState }              from '../interfaces/IValidationContextState';
import ControlInfoCollectionModel               from '../../models/ControlInfoCollectionModel';
import React                                    from 'react';
import ValidatedTextFieldControl                       from '../../controls/textFieldControl/ValidatedTextFieldControl';


// Validation Context
// 
// Define the contract that is used to wrap forms,
//
// Note that values provided here are DEFAULT VALUES only
// 
export const ValidationContext = React.createContext<IValidationContextState & IValidationContextActions<any>>({
     fields : new Array<ValidatedTextFieldControl>(),
     controlInfoCollection : new ControlInfoCollectionModel(),
     isFormValid: true,
     fieldsValidCount: 0,
     fieldsInvalidCount : 0,
     hasBeenFullyValidated: false,
     addField: (field: ValidatedTextFieldControl) => {},
     onFieldUpdated: () => {},
     validate:() => { return true;},
     getModel:() => {return null}
});
