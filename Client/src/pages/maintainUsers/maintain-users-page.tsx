import React                                    from 'react';
import CopyrightComponent                       from '../../components/copyrightComponent/CopyrightComponent';
import UserListComponent                        from '../../components/userList/UserListComponent';

const MaintainUsersPage: React.FC = () => {

    return (
        <>
            <h1>maintain users</h1>
            <UserListComponent />
            <CopyrightComponent />
        </>
    );
}

export default MaintainUsersPage;