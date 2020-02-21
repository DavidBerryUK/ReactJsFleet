import { TextField }                          from '@material-ui/core';
import React, { useState, useEffect }                                  from 'react';

interface IUniqueSelectorProperties {
    onSelectionChanged : (searchText: string) => void
}
//
// https://github.com/xnimorz/use-debounce
//

// Component
// Displays a drop down list of unique number of doors per car
//
const RegistrationSearchBoxComponent: React.FC<IUniqueSelectorProperties> = (props) => {
        

    const [searchText, setSearchText] = React.useState("");     

    const debouncedSearchTerm = useDebounce(searchText, 500);

    // the user selection has changed, raise an event to the host control
    // indicating the value has been updated
    function valueChangedEventHandler(event : React.ChangeEvent) {            
        const typedEvent = event as React.ChangeEvent<HTMLInputElement>                    
        const searchTextValue =  typedEvent.target.value
        setSearchText(searchTextValue);             
    }

    useEffect(() => {
        if ( debouncedSearchTerm) {
            console.log("Debounce Search: " + debouncedSearchTerm);
        }
    },[debouncedSearchTerm]);    

    // Display Template
    //
    return (        
        <TextField  
        value={searchText}
        onChange={(event: any) => { valueChangedEventHandler(event) }}
        variant="outlined" 
        margin="dense" 
        fullWidth/>
    )


// Hook
function useDebounce(value : string, delay: number) {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);
  
    useEffect(
      () => {
        // Update debounced value after delay
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);
  
        // Cancel the timeout if value changes (also on delay change or unmount)
        // This is how we prevent debounced value from updating if value is changed ...
        // .. within the delay period. Timeout gets cleared and restarted.
        return () => {
          clearTimeout(handler);
        };
      },
      [value, delay] // Only re-call effect if value or delay changes
    );
  
    return debouncedValue;
  }
}

export default RegistrationSearchBoxComponent;