import { MenuItem }                             from '@material-ui/core';
import { FormControl }                          from '@material-ui/core';
import { Select }                               from '@material-ui/core';
import { useMemo }                              from 'react';
import ApiBaseCollectionResponseModel           from '../../models/apiBase/ApiBaseCollectionResponseModel';
import ListItemModel                            from '../../models/list/ListItemModel';
import React                                    from 'react';
import RepositorySpecification                  from '../../repository/specification/RepositorySpecification';

interface IUniqueSelectorProperties {
    onSelectionChanged : (item: ListItemModel) => void
}

const UniqueTransmissionSelectorComponent: React.FC<IUniqueSelectorProperties> = (props) => {

    const unselectedItem = new ListItemModel();
    const [list, setList] = React.useState(new Array<ListItemModel>());
    const [selectedItem, setSelectedItem] = React.useState(unselectedItem);      

    useMemo(() => {
        var repository = new RepositorySpecification();
        repository.getUniqueTransmission()
            .onSuccess((list: ApiBaseCollectionResponseModel<ListItemModel>) => {
                setList(list.entities!);
            });
    },[])

    function valueChangedEventHandler(event : React.ChangeEvent) {    
        const typedEvent = event as React.ChangeEvent<HTMLInputElement>                    
        let item = list.find(item => item.entityValue === typedEvent.target.value) ?? unselectedItem;
        setSelectedItem(item);                
        props.onSelectionChanged(item);
    }

    return (
        <FormControl variant="outlined"  margin="dense" fullWidth>
            <Select displayEmpty    
                onChange={(event: any) => { valueChangedEventHandler(event) }}
                value={selectedItem.entityValue}>          
                <MenuItem  value=""><em>none</em></MenuItem>
                    {list.map((item: ListItemModel) => (
                        <MenuItem key={item.entityValue} value={item.id}>{item.text}</MenuItem>
                    ))}
            </Select>
        </FormControl>
    )
}

export default UniqueTransmissionSelectorComponent;