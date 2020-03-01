import { FormControl }                          from '@material-ui/core';
import { MenuItem }                             from '@material-ui/core';
import { Select }                               from '@material-ui/core';
import { useMemo }                              from 'react';
import ApiBaseCollectionResponseModel           from '../../../models/apiBase/ApiBaseCollectionResponseModel';
import ListItemModel                            from '../../../models/list/ListItemModel';
import React                                    from 'react';
import RepositorySpecification                  from '../../../repository/specification/RepositorySpecification';

interface IUniqueSelectorProperties {
    value: string,
    onSelectionChanged: (item: ListItemModel) => void
}

// Component
// Displays a drop down list of unique colours for the fleet cars
//
const UniqueColourSelectorComponent: React.FC<IUniqueSelectorProperties> = (props) => {

    const unselectedItem = new ListItemModel();
    const [list, setList] = React.useState(new Array<ListItemModel>());
    const [selectedItem, setSelectedItem] = React.useState(unselectedItem);

    // only get data once regardless of how many time the screen refreshed
    useMemo(() => {
        var repository = new RepositorySpecification();
        repository.getUniqueColours()
            .onSuccess((list: ApiBaseCollectionResponseModel<ListItemModel>) => {
                setList(list.entities!);
                let item = list.entities?.find(item => item.entityValue === props.value);
                if (item != null) {
                    setSelectedItem(item);
                }
            });
    }, [props.value])

    // the user selection has changed, raise an event to the host control
    // indicating the value has been updated
    function valueChangedEventHandler(event: React.ChangeEvent) {
        const typedEvent = event as React.ChangeEvent<HTMLInputElement>
        let item = list.find(item => item.entityValue === typedEvent.target.value) ?? unselectedItem;
        setSelectedItem(item);
        props.onSelectionChanged(item);
    }

    // Display Template
    //
    return (
        <FormControl variant="outlined" margin="dense" fullWidth>
            <Select displayEmpty
                onChange={(event: any) => { valueChangedEventHandler(event) }}
                value={selectedItem.entityValue}>
                <MenuItem value=""><em>none</em></MenuItem>
                {list.map((item: ListItemModel) => (
                    <MenuItem key={item.entityValue} value={item.id}>{item.text}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default UniqueColourSelectorComponent;