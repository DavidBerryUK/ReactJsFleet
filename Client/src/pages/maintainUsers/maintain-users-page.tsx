import { classStyleDefinition }                 from './classStyleDefinition'
import { Route }                                from 'react-router';
import { Switch }                               from 'react-router';
import CopyrightComponent                       from '../../components/controls/copyrightComponent/CopyrightComponent';
import React                                    from 'react';
import UserEditComponent                        from '../../components/appWidget/userEdit/UserEditComponent';
import UserListComponent                        from '../../components/appWidget/userList/UserListComponent';
import UserNoMatchComponent                     from '../../components/appWidget/userNoMatch/UserNoMatchComponent';
import UserViewComponent                        from '../../components/appWidget/userView/UserViewComponent';

const MaintainUsersPage: React.FC = () => {

    const classStyles = classStyleDefinition();

    return (
        <>          
            <div className={classStyles.regionList}>
                <UserListComponent />
            </div>
            <div className={classStyles.regionDetail}>
                <Switch>                      
                    <Route path={"/*/:userId/view"} component={UserViewComponent} />                                  
                    <Route path={"/*/:userId/edit"}  component={UserEditComponent}/>     
                    <Route component={UserNoMatchComponent}/>
                </Switch>
            </div>          
            <CopyrightComponent />
        </>
    );
}

export default MaintainUsersPage;