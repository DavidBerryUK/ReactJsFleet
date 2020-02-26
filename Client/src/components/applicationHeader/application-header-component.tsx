import { AppBar }                               from '@material-ui/core';
import { Box }                                  from '@material-ui/core';
import { Toolbar }                              from '@material-ui/core';
import { Typography }                           from '@material-ui/core';
import ApplicationContext                       from '../../services/applicationContext/ApplicationContext';
import LocalShippingRoundedIcon                 from '@material-ui/icons/LocalShippingRounded';
import LoginSummary                             from '../loginSummaryCompoment/LoginSummary';
import React                                    from 'react';
import { useContext }                           from 'react';

const ApplicationHeaderComponent: React.FC = () => {

  const { state } = useContext(ApplicationContext);

  return (
    <AppBar position="static">
      <Toolbar >

        <Box display="flex" width={1}>
          <Box display="flex" justifyContent="left">
            <LocalShippingRoundedIcon fontSize="large"/>
        </Box>

        <Box display="flex" flex={1} justifyContent="center">
            <Typography  variant="h6">Application</Typography>
        </Box>

        <Box display="flex" justifyContent="right">
          token:{state.token}
        </Box>
        <Box display="flex" justifyContent="right">
            <LoginSummary />
          </Box>
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default ApplicationHeaderComponent;