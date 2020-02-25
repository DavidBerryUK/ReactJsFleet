import { ApplicationContext }                   from '../../services/applicationContext/ApplicationContext'
import { BrowserRouter }                        from 'react-router-dom';
import { Button }                               from '@material-ui/core';
import { makeStyles }                           from '@material-ui/styles';
import { Paper }                                from '@material-ui/core';
import { Typography }                           from '@material-ui/core';
import ApplicationContextModel                  from '../../services/applicationContext/models/ApplicationContextModel';
import ApplicationContextStateModel             from '../../services/applicationContext/models/ApplicationContextStateModel';
import CssBaseline                              from '@material-ui/core/CssBaseline';
import DashboardButton                          from '../dashboardButton/dashboard-button-component';
import DemoPageTitle                            from '../demoPageTitle/demoPageTitle-component';
import React                                    from 'react';
import RouteConstants                           from '../../routing/RouteConstants';
import Routes                                   from '../../routing/Routes';
import SampleCounterComponent                   from '../sampleCounterComponent/SampleCounterComponent';

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
    <ApplicationContext.Provider value={ new ApplicationContextModel( new ApplicationContextStateModel())}>      
      <CssBaseline/>
      THIS IS THE APPLICATION
      <BrowserRouter>
      <DemoPageTitle title="Home Page"/>
      <DashboardButton/>
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
        <Routes/>
        <SampleCounterComponent/>
      </div>
      </BrowserRouter>
    </ApplicationContext.Provider>
  );
}

export default App;
