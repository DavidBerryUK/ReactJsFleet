import { Box }                                  from '@material-ui/core';
import { makeStyles }                           from '@material-ui/styles';
import ApplicationHeader                        from '../../components/applicationHeader/application-header-component'
import FleetListComponent                       from '../../components/fleetList/fleet-list-component'
import React                                    from 'react';

const FleetListPage: React.FC = () => {

  const useStyles = makeStyles(theme => ({
    fleetTable: {
      marginLeft: 16,
      marginRight: 16,
      marginBottom: 16
    }
}));

const classes = useStyles();


  return (
    <div >
        <ApplicationHeader></ApplicationHeader>        
        <Box className={classes.fleetTable} >
          <FleetListComponent></FleetListComponent>
        </Box>
    </div>
  );
}

export default FleetListPage;