import { BrowserRouter, Link }                        from 'react-router-dom';
import { Button }                               from '@material-ui/core';
import { ContextOneProvider }                   from '../../services/applicationContext/OneContext';
import { makeStyles }                           from '@material-ui/styles';
import { Paper }                                from '@material-ui/core';
import { Route }                                from 'react-router-dom';
import { Switch }                               from 'react-router-dom';
import { Typography }                           from '@material-ui/core';
import CssBaseline                              from '@material-ui/core/CssBaseline';
import DashboardButton                          from '../dashboardButton/dashboard-button-component';
import DashboardPage                            from '../../pages/dashboard/dashboard-page';
import DefectSheetPage                          from '../../pages/defectSheet/defect-sheet-page';
import DemoPageTitle                            from '../demoPageTitle/demoPageTitle-component';
import FleetDetailPage                          from '../../pages/fleetDetail/fleet-detail-page';
import FleetListPage                            from '../../pages/fleetList/fleet-list-page';
import LoginPage                                from '../../pages/login/login-page';
import React                                    from 'react';
import RouteConstants                           from '../../routing/RouteConstants';
import SampleCounterComponent                   from '../sampleCounterComponent/SampleCounterComponent';

const App: React.FC = () => {

  const useStyles = makeStyles(theme => ({
    app: {
      backgroundColor: '#eee',
    },
    root: {
      '& > *': {
        margin: 4,
      },
    },

    paper: {
      margin: 4,
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
    <ContextOneProvider>
      <CssBaseline />
      <BrowserRouter>
      <DemoPageTitle title="App" />
      <DashboardButton />
      <div className={classes.app}>
        <Paper className={classes.paper}>
          <Typography variant="h5">APP Navigation</Typography>
          <div className={classes.root}>
            <Link to={RouteConstants.Login}><Button variant="contained" color="primary" className={classes.button}>Login(link)</Button></Link>
            <Link to={RouteConstants.DefectSheet}><Button variant="contained" color="primary" className={classes.button}>Defect(link)</Button></Link>
            <Link to={RouteConstants.FleetList}><Button variant="contained" color="primary" className={classes.button}>Fleet List(link)</Button></Link>
            <Link to={RouteConstants.FleetDetail}><Button variant="contained" color="primary" className={classes.button}>Fleet Detail(link)</Button></Link>
          </div>
        </Paper>
        
          <Switch>
            <Route exact path="/" component={DashboardPage} />
            <Route path={RouteConstants.Dashboard} component={DashboardPage} />
            <Route path={RouteConstants.DefectSheet} component={DefectSheetPage} />
            <Route path={`${RouteConstants.FleetDetail}/:id`} component={FleetDetailPage} />
            <Route path={RouteConstants.FleetList} component={FleetListPage} />
            <Route path={RouteConstants.Login} component={LoginPage} />
          </Switch>
        
        <SampleCounterComponent />
      </div>
      </BrowserRouter>
    </ContextOneProvider>
  );
}

export default App;
