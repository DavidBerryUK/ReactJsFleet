import { ApplicationContextProvider }           from '../../services/applicationContext/ApplicationContext';
import { BrowserRouter }                        from 'react-router-dom';
import { Button }                               from '@material-ui/core';
import { Link }                                 from 'react-router-dom';
import { makeStyles }                           from '@material-ui/styles';
import { Paper }                                from '@material-ui/core';
import ApplicationHeaderComponent               from '../applicationHeader/application-header-component';
import AutoLogin                                from '../controls/autoLogin/AutoLogin';
import CssBaseline                              from '@material-ui/core/CssBaseline';
import React                                    from 'react';
import RouteConstants                           from '../../routing/RouteConstants';
import Routes                                   from '../../routing/Routes';

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
      padding: 4,
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
    <ApplicationContextProvider>
      <CssBaseline />
      <BrowserRouter>
        <ApplicationHeaderComponent />
        <AutoLogin />
        <div className={classes.app}>
          <Paper className={classes.paper}>
            <div className={classes.root}>
              <Link to={RouteConstants.FleetList}><Button variant="contained" color="primary" className={classes.button}>Fleet List</Button></Link>
              <Link to={RouteConstants.DefectSheet}><Button variant="contained" color="primary" className={classes.button}>Defect</Button></Link>
              <Link to={RouteConstants.MaintainUsers}><Button variant="contained" color="primary" className={classes.button}>Users</Button></Link>
            </div>
          </Paper>
          <Routes />
        </div>
      </BrowserRouter>
    </ApplicationContextProvider>
  );
}

export default App;
