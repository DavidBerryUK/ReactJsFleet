import { Component }                            from 'react';
import { TextFieldProps }                       from '@material-ui/core/TextField';
import React                                    from 'react';
import TextField                                from '@material-ui/core/TextField';

export default class ValidatedTextField extends Component<TextFieldProps,any> {

    state = {
        text:""
    }

    render() {
        return (
            <TextField
                {...this.props}
                onChange={(event) => { this.handleOnChangeEvent(event) }}
                value={this.state.text}
            />
        );
    }

    handleOnChangeEvent(event : React.ChangeEvent) {
        var typedEvent = event as React.ChangeEvent<HTMLInputElement>
        console.log("value changed :" + this.props.name + " = " + typedEvent.target.value)
        this.setState ({ text : typedEvent.target.value});
    }
}
