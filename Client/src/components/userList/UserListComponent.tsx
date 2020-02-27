import { useMemo }                              from 'react';
import ApiBaseCollectionResponseModel           from '../../models/apiBase/ApiBaseCollectionResponseModel';
import React                                    from 'react';
import UserModel                                from '../../models/user/UserModel';
import RepositoryUserList                       from '../../repository/user/RepositoryUserList';


const UserListComponent: React.FC = () => {

    const [userList, setUserList] = React.useState(new ApiBaseCollectionResponseModel<UserModel>());

    useMemo(() => {
        var userRepository = new RepositoryUserList();
        userRepository.getUserList()
        .onSuccess((userListData: ApiBaseCollectionResponseModel<UserModel>) => {
            setUserList(userListData);
        });
    },[]);

    return(
        <>
         {userList.entities?.map(row => ( 
             <div  key={row.entityKey}>
             {row.forename} {row.surname}<br></br>
             </div>
         ))}
        </>
    )
}

export default UserListComponent;