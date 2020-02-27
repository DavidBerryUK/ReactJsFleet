import { classStyleDefinition }                 from './classStyleDefinition'
import CopyrightComponent                       from '../../components/copyrightComponent/CopyrightComponent';
import React                                    from 'react';
import UserListComponent                        from '../../components/userList/UserListComponent';


const MaintainUsersPage: React.FC = () => {

    const classStyles = classStyleDefinition();

    return (
        <>          
            <div className={classStyles.regionList}>
                <UserListComponent />
            </div>
            <div className={classStyles.regionDetail}>
                <h4>User Detail</h4>
            </div>          
            <CopyrightComponent />
        </>
    );
}

export default MaintainUsersPage;