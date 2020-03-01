import { TextField }                            from '@material-ui/core';
import React                                    from 'react';

interface IUniqueSelectorProperties {
    onSelectionChanged: (searchText: string) => void
}

// Component
// Displays a drop down list of unique number of doors per car
//
const RegistrationSearchBoxComponent: React.FC<IUniqueSelectorProperties> = (props) => {

    const [searchText, setSearchText] = React.useState("");

    // the user selection has changed, raise an event to the host control
    // indicating the value has been updated
    function valueChangedEventHandler(event: React.ChangeEvent) {
        const typedEvent = event as React.ChangeEvent<HTMLInputElement>
        const searchTextValue = typedEvent.target.value
        setSearchText(searchTextValue);
        props.onSelectionChanged(searchTextValue);
    }            
    
    return (
        <TextField
            value={searchText}
            onChange={(event: any) => { valueChangedEventHandler(event) }}
            variant="outlined"
            margin="dense"
            fullWidth />
    )
}

export default RegistrationSearchBoxComponent;