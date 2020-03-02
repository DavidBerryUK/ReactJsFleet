import { Avatar }                               from '@material-ui/core';
import { Card}                                  from '@material-ui/core';
import { CardActionArea }                       from '@material-ui/core';
import { CardContent }                          from '@material-ui/core';
import { CardHeader }                           from '@material-ui/core';
import { classStyleDefinition }                 from './classStyleDefinition';
import { useHistory }                           from 'react-router';
import { useMemo }                              from 'react';
import { useState }                             from 'react';
import ApiBaseCollectionResponseModel           from '../../../models/apiBase/ApiBaseCollectionResponseModel';
import React                                    from 'react';
import RepositoryUserList                       from '../../../repository/user/RepositoryUserList';
import UserModel                                from '../../../models/user/UserModel';

const UserListWidget: React.FC = () => {

    const classStyles = classStyleDefinition();    
    const [userList, setUserList] = useState(new ApiBaseCollectionResponseModel<UserModel>());
    var history = useHistory();

    useMemo(() => {
        var userRepository = new RepositoryUserList();
        userRepository.getUserList()
            .onSuccess((userListData: ApiBaseCollectionResponseModel<UserModel>) => {
                setUserList(userListData);
            });
    }, []);

    function selectUserOnClickEventHandler(user : UserModel) {            
        history.push(`/maintain-users/${user.entityKey}/view`);
    }

    return (
        <>
            {userList.entities?.map(row => (
                <Card className={classStyles.card}
                    key={row.entityKey}>
                    <CardActionArea onClick={() => {selectUserOnClickEventHandler(row)}}>
                        <CardHeader title='user'
                            avatar={
                                <Avatar>
                                    {row.initals}
                                </Avatar>}>
                        </CardHeader>
                        <CardContent>
                            {row.forename} {row.surname}<br></br>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </>
    )
}

export default UserListWidget;