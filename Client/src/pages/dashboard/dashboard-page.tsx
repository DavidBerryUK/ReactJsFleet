import { Button }                               from '@material-ui/core';
import { makeStyles }                           from '@material-ui/styles';
import { Paper }                                from '@material-ui/core';
import React                                    from 'react';
import RouteConstants                           from '../../routing/RouteConstants';
import SampleCounterComponent                   from '../../components/sampleCounterComponent/SampleCounterComponent';

const DashboardPage: React.FC = () => {

  const useStyles = makeStyles(theme => ({

    root: {
      '& > *': {
        margin: 20,
      },
    },
    paper: {
      margin: 50,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    button: {
      width: 150
    }
  }));

  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.paper}>
        <div className={classes.root}>
          <Button variant="contained" color="primary" className={classes.button} href={RouteConstants.Login}>Login</Button>
          <Button variant="contained" color="primary" className={classes.button} href={RouteConstants.DefectSheet}>Defect</Button>
          <Button variant="contained" color="primary" className={classes.button} href={RouteConstants.FleetList}>Fleet List</Button>
          <Button variant="contained" color="primary" className={classes.button} href={RouteConstants.FleetDetail}>Fleet Detail</Button>
        </div>
      </Paper>
      <SampleCounterComponent/>
    </div>
  );
};

export default DashboardPage;
