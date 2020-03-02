import { FormControl }                          from '@material-ui/core';
import { FormControlLabel }                     from '@material-ui/core';
import { MenuItem }                             from '@material-ui/core';
import { Select }                               from '@material-ui/core';
import React                                    from 'react';

interface IRowsPerPageProperties {
    onRowsPerPageChanged : (rowsPerPage: number) => void
}

// Component
// Displays a drop down list of number of rows to display
//
const RowsPerPageControl: React.FC<IRowsPerPageProperties> = (props) => {
    
    const [rowsPerPage, setRowsPerPage] = React.useState(20);       
    const rowPerPageOptions = [5,10,15,20,25,30,35,40,45,50];    
    
    // the user selection has changed, raise an event to the host control
    // indicating the value has been updated
    function valueChangedEventHandler(event : React.ChangeEvent) {    
        const typedEvent = event as React.ChangeEvent<HTMLInputElement>
        const value = Number(typedEvent.target.value);
        setRowsPerPage(value);
        props.onRowsPerPageChanged(value);
    }

    // Display Template
    //
    return (        
        <FormControlLabel 
        control={
        <FormControl margin="dense" fullWidth>
        
            <Select displayEmpty    
                onChange={(event: any) => { valueChangedEventHandler(event) }}
                value={rowsPerPage}>          
                    {rowPerPageOptions.map((rowsPerPage: number) => (
                        <MenuItem key={rowsPerPage} value={rowsPerPage}>{rowsPerPage}</MenuItem>
                    ))}
            </Select>
            </FormControl>
        } 
        label="rows&nbsp;&nbsp;"   
        labelPlacement="start"    
        />        
    )
}

export default RowsPerPageControl;