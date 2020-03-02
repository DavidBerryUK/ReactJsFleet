import { AppBar }                               from '@material-ui/core';
import { Box }                                  from '@material-ui/core';
import { Toolbar }                              from '@material-ui/core';
import { Typography }                           from '@material-ui/core';
import LocalShippingRoundedIcon                 from '@material-ui/icons/LocalShippingRounded';
import LoginSummaryWidget                       from '../loginSummaryWidget/LoginSummaryWidget';
import React                                    from 'react';

const ApplicationHeaderWidget: React.FC = () => {

  return (
    <AppBar position="static" >
      <Toolbar >

        <Box display="flex" width={1}>
          <Box display="flex" justifyContent="left">
            <LocalShippingRoundedIcon fontSize="large"/>
        </Box>

        <Box display="flex" flex={1} justifyContent="center">
            <Typography  variant="h6">Application</Typography>
        </Box>

        <Box display="flex" justifyContent="right">
            <LoginSummaryWidget />
          </Box>
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default ApplicationHeaderWidget;