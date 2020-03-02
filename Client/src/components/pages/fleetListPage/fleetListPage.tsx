import { Box }                                  from '@material-ui/core';
import { makeStyles }                           from '@material-ui/styles';
import FleetListWidget                          from '../../widgets/fleetListWidget/fleetListWidget'
import React                                    from 'react';

const FleetListPage: React.FC = () => {

  const useStyles = makeStyles(theme => ({
    fleetTable: {
      marginTop:20,
      marginLeft: 8,
      marginRight: 8,
      marginBottom: 16
    }
  }));

  const classes = useStyles();


  return (
    <Box className={classes.fleetTable} >
      <FleetListWidget></FleetListWidget>
    </Box>
  );
}

export default FleetListPage;