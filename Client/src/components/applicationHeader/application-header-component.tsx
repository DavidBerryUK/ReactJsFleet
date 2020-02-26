import { AppBar, Typography }                               from '@material-ui/core';
import { Box }                                  from '@material-ui/core';
import { Toolbar }                              from '@material-ui/core';
import LoginSummary                             from '../loginSummaryCompoment/LoginSummary';
import React                                    from 'react';
import LocalShippingRoundedIcon                 from '@material-ui/icons/LocalShippingRounded';

const ApplicationHeaderComponent: React.FC = () => {

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
            <LoginSummary />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default ApplicationHeaderComponent;