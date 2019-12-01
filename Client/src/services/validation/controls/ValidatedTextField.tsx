import { Component }                            from 'react';
import React                                    from 'react';
import { TextFieldProps }                       from '@material-ui/core/TextField';
import TextField                                from '@material-ui/core/TextField';

export default class ValidatedTextField extends Component<TextFieldProps,any> {

    
    render() {
        return (
            <TextField
                {...this.props}
            />
        );
    }
}
