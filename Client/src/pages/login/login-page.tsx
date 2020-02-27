import { Box }                                  from '@material-ui/core';
import { useContext }                           from 'react';
import ApplicationContext                       from '../../services/applicationContext/ApplicationContext';
import CopyrightComponent                       from '../../components/copyrightComponent/CopyrightComponent';
import LoginComponent                           from '../../components/login/login-component';
import React                                    from 'react';

const LoginPage: React.FC = () => {

  const state = useContext(ApplicationContext).state;

  return (
    <>
      {state.userState.loggedIn ?
        <>
          <Box display="Flex" p={4} justifyContent="center">
          <h3>you are already logged into the system</h3>
          </Box>
        </> : null}

      {!state.userState.loggedIn ?
        <>
          <Box mt={8}>
            <LoginComponent></LoginComponent>
          </Box>
        </> : null}

      <CopyrightComponent/>
    </>
  );
}

export default LoginPage;