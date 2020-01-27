import { useMemo }                              from 'react';
import ApiBaseCollectionResponseModel           from '../../models/apiBase/ApiBaseCollectionResponseModel';
import ListItemModel                            from '../../models/list/ListItemModel';
import React                                    from 'react';
import RepositorySpecification                  from '../../repository/specification/RepositorySpecification';

const UniqueTransmissionSelectorComponent: React.FC = () => {

    const [list, setList] = React.useState(new Array<ListItemModel>());

    useMemo(() => {
        var repository = new RepositorySpecification();
        repository.getUniqueTransmission()
            .onSuccess((list: ApiBaseCollectionResponseModel<ListItemModel>) => {
                setList(list.entities!);
            });
    },[])

    return (

        <ul>
            {list.map(row => (
                <li key={row.entityKey}>{row.text}</li>
            ))}
        </ul>
    );
}

export default UniqueTransmissionSelectorComponent;