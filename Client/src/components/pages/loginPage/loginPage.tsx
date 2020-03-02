import { Box }                                  from '@material-ui/core';
import { useContext }                           from 'react';
import ApplicationContext                       from '../../../services/applicationContext/ApplicationContext';
import CopyrightControl                         from '../../controls/copyrightControl/CopyrightControl';
import LoginWidget                              from '../../widgets/loginWidget/loginWidget';
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
            <LoginWidget></LoginWidget>
          </Box>
        </> : null}

      <CopyrightControl/>
    </>
  );
}

export default LoginPage;