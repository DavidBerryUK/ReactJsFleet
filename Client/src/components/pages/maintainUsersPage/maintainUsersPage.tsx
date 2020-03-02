import { classStyleDefinition }                 from './classStyleDefinition'
import { Route }                                from 'react-router';
import { Switch }                               from 'react-router';
import CopyrightControl                         from '../../controls/copyrightControl/CopyrightControl';
import NoMatchingPathControl                    from '../../controls/noMatchingPathControl/noMatchingPathControl';
import React                                    from 'react';
import UserEditWidget                           from '../../widgets/userEditWidget/UserEditWidget';
import UserListWidget                           from '../../widgets/userListWidget/UserListWidget';
import UserViewWidget                           from '../../widgets/userViewWidget/UserViewWidget';

const MaintainUsersPage: React.FC = () => {

    const classStyles = classStyleDefinition();

    return (
        <>          
            <div className={classStyles.regionList}>
                <UserListWidget />
            </div>
            <div className={classStyles.regionDetail}>
                <Switch>                      
                    <Route path={"/*/:userId/view"} component={UserViewWidget} />                                  
                    <Route path={"/*/:userId/edit"}  component={UserEditWidget}/>     
                    <Route component={NoMatchingPathControl}/>
                </Switch>
            </div>          
            <CopyrightControl />
        </>
    );
}

export default MaintainUsersPage;