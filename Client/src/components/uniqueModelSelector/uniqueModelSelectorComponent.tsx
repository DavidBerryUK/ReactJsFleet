import { useMemo }                              from 'react';
import ApiBaseCollectionResponseModel           from '../../models/apiBase/ApiBaseCollectionResponseModel';
import ListItemModel                            from '../../models/list/ListItemModel';
import React                                    from 'react';
import RepositorySpecification                  from '../../repository/specification/RepositorySpecification';

const UniqueModelSelectorComponent: React.FC = () => {

    const [list, setList] = React.useState(new Array<ListItemModel>());

    useMemo(() => {
        var repository = new RepositorySpecification();
        console.log("Call Repo");
        repository.getUniqueModels()
            .onSuccess((list: ApiBaseCollectionResponseModel<ListItemModel>) => {
                console.log("Set List");
                console.log(list.entities!);
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

export default UniqueModelSelectorComponent;