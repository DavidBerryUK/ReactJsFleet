import { Box }                                  from '@material-ui/core';
import { Button }                               from '@material-ui/core';
import { EnumAction }                           from '../../../services/applicationContext/ApplicationContext';
import { useContext }                           from 'react';
import { useHistory }                           from 'react-router';
import ApplicationContext                       from '../../../services/applicationContext/ApplicationContext';
import LockIcon                                 from '@material-ui/icons/Lock';
import LockOpenIcon                             from '@material-ui/icons/LockOpen';
import React                                    from 'react';  
import RouteConstants                           from '../../../routing/RouteConstants';

const LoginSummary: React.FC = () => {

    const { state, dispatch } = useContext(ApplicationContext);
    var history = useHistory();

    function loginClickHandler() {
        history.push(RouteConstants.Login);
    }

    function logoutClickHandler() {
        dispatch({ type: EnumAction.Logout })        
        history.push(RouteConstants.Login);
    }

    return (
        <>
            {state.userState.loggedIn ?
                <>
                   <Box fontWeight="fontWeightLight" m={1} mr={3}>{state.userState.user?.forename} {state.userState.user?.surname}</Box>
                    <Button variant="contained" endIcon={<LockOpenIcon />} onClick={logoutClickHandler}>Logout</Button>
                </> : null}

            {!state.userState.loggedIn ?
                <>
                    <Button variant="contained" endIcon={<LockIcon />} onClick={loginClickHandler}>Login</Button>
                </> : null}
        </>
    );
}

export default LoginSummary;