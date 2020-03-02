import { RouteComponentProps }                  from 'react-router';
import { useMemo }                              from 'react';
import { useState }                             from 'react';
import ApiBaseItemResponseModel                 from '../../../models/apiBase/ApiBaseItemResponseModel';
import React                                    from 'react';
import RepositoryUserItem                       from '../../../repository/user/RepositoryUserItem';
import UserModel                                from '../../../models/user/UserModel';

type PropsType = RouteComponentProps<{ userId: string }>;

const UserEditWidget : React.FC<PropsType> = (props) => {    

    const [currentUser, setCurrentUser] = useState<UserModel>( new UserModel());

    useMemo(() => {
        console.log(props.match.params.userId);
        var userRepository = new RepositoryUserItem();
        userRepository.getUserById(Number(props.match.params.userId))
            .onSuccess((userData: ApiBaseItemResponseModel<UserModel>) => {
                setCurrentUser(userData.entity!);
            });
    }, [props]);

    return (
        <>
        <h4>User Edit:</h4>
        <h5>{currentUser.id}</h5>
        <h5>{currentUser.forename}</h5>
        <h5>{currentUser.surname}</h5>
        <h5>{currentUser.initals}</h5>
        </>
    );
}

export default UserEditWidget;