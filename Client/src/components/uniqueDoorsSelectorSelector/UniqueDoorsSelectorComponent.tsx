import { MenuItem }                             from '@material-ui/core';
import { FormControl }                          from '@material-ui/core';
import { Select }                               from '@material-ui/core';
import { useMemo }                              from 'react';
import ApiBaseCollectionResponseModel           from '../../models/apiBase/ApiBaseCollectionResponseModel';
import ListItemModel                            from '../../models/list/ListItemModel';
import React                                    from 'react';
import RepositorySpecification                  from '../../repository/specification/RepositorySpecification';

const UniqueDoorsSelectorComponent: React.FC = () => {

    const [list, setList] = React.useState(new Array<ListItemModel>());
    const [selectedItem, setSelectedItem] = React.useState("");    

    useMemo(() => {
        var repository = new RepositorySpecification();
        repository.getUniqueDoors()
            .onSuccess((list: ApiBaseCollectionResponseModel<ListItemModel>) => {
                setList(list.entities!);
            });
    },[])

    function valueChangedEventHandler(event : React.ChangeEvent) {    
        const typedEvent = event as React.ChangeEvent<HTMLInputElement>    
        setSelectedItem(typedEvent.target.value as string);
    }

    return (
        <FormControl variant="outlined"  margin="dense" fullWidth>
            <Select displayEmpty    
                onChange={(event: any) => { valueChangedEventHandler(event) }}
                value={selectedItem}>          
                <MenuItem  value=""><em>none</em></MenuItem>
                    {list.map((item: ListItemModel) => (
                        <MenuItem key={item.entityKey} value={item.id}>{item.text}</MenuItem>
                    ))}
            </Select>
        </FormControl>
    )
}

export default UniqueDoorsSelectorComponent;