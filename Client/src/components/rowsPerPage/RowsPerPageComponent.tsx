import { FormControl }                          from '@material-ui/core';
import { FormControlLabel }                     from '@material-ui/core';
import { MenuItem }                             from '@material-ui/core';
import { Select }                               from '@material-ui/core';
import React                                    from 'react';

interface IRowsPerPageProperties {
    onRowsPerPageChanged : (rowsPerPage: number) => void
}

const RowsPerPageComponent: React.FC<IRowsPerPageProperties> = (props) => {
    
    const [rowsPerPage, setRowsPerPage] = React.useState(10);       
    const rowPerPageOptions = [5,10,15,20,25];    

    function valueChangedEventHandler(event : React.ChangeEvent) {    
        const typedEvent = event as React.ChangeEvent<HTMLInputElement>
        const value = Number(typedEvent.target.value);
        setRowsPerPage(value);
        props.onRowsPerPageChanged(value);
    }

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

export default RowsPerPageComponent;