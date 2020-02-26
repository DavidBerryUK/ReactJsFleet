import { Box }                                  from '@material-ui/core';
import CopyrightComponent                       from '../../components/copyrightComponent/CopyrightComponent';
import LoginComponent                           from '../../components/login/login-component';
import React                                    from 'react';
import SampleCounterComponent                   from '../../components/sampleCounterComponent/SampleCounterComponent';

const LoginPage: React.FC = () => {

  return (
    <div >
      <Box mt={8}>
        <LoginComponent></LoginComponent>
      </Box>
      <SampleCounterComponent />
      <CopyrightComponent></CopyrightComponent>
    </div>
  );
}

export default LoginPage;