import { ApplicationContextProvider }           from '../../services/applicationContext/ApplicationContext'
import { Button, Paper, Typography }                               from '@material-ui/core';
import { makeStyles }                           from '@material-ui/styles';
import ApplicationContextModel                  from '../../services/applicationContext/models/ApplicationContextModel';
import CssBaseline                              from '@material-ui/core/CssBaseline';
import React                                    from 'react';
import RouteConstants                           from '../../routing/RouteConstants';



const App: React.FC = () => {

  const useStyles = makeStyles(theme => ({
    app:{
      backgroundColor:'#eee',
    },
    root: {
      '& > *': {
        margin: 20,
      },
    },
    paper: {
      margin:50,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    button: {
      width:150
    }
  }));

  const classes = useStyles();

  return (
    <ApplicationContextProvider value={ new ApplicationContextModel(0)}>
      <CssBaseline/>
      <div className={classes.app}>
        <Paper className={classes.paper}>
        
          <Typography variant="h1">Demo React Project</Typography>
        <div className={classes.root}>
          <Button variant="contained" color="primary" className={classes.button} href={RouteConstants.Login}>Login</Button>
          <Button variant="contained" color="primary" className={classes.button} href={RouteConstants.DefectSheet}>Defect</Button>
          <Button variant="contained" color="primary" className={classes.button} href={RouteConstants.FleetList}>Fleet List</Button>
          <Button variant="contained" color="primary" className={classes.button} href={RouteConstants.FleetDetail}>Fleet Detail</Button>
        </div>
        </Paper>
      </div>
    </ApplicationContextProvider>
  );
}

export default App;
