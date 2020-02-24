import { Box }                                  from '@material-ui/core';
import CopyrightComponent                       from '../../components/copyrightComponent/CopyrightComponent';
import DashboardButton                          from '../../components/dashboardButton/dashboard-button-component';
import DemoPageTitle                            from '../../components/demoPageTitle/demoPageTitle-component';
import LoginComponent                           from '../../components/login/login-component';
import React                                    from 'react';
import SampleCounterComponent                   from '../../components/sampleCounterComponent/SampleCounterComponent';

const LoginPage: React.FC = () => {

  return (
    <div >
      <DashboardButton/>
      <DemoPageTitle title="Login"/>
      <Box mt={8}>
      <LoginComponent></LoginComponent>
      </Box>
      <SampleCounterComponent/>
      <CopyrightComponent></CopyrightComponent>
      </div>
  );  
}

export default LoginPage;