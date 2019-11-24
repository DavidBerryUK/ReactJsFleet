import { ApplicationContextConsumer }           from '../../services/applicationContext/ApplicationContext'
import { IApplicationContextModel }             from '../../services/applicationContext/interfaces/IApplicationContextModel';
import { Link }                                 from 'react-router-dom';
import { MouseEvent, useContext }                           from 'react';
import ApplicationHeaderComponent               from '../../components/applicationHeader/application-header-component';
import Button                                   from '@material-ui/core/Button';
import React                                    from 'react';
import RouteConstants                           from '../../routing/RouteConstants';
import { ApplicationContext }                   from '../../services/applicationContext/ApplicationContext'

const useApplicationContext = () => useContext(ApplicationContext);

const DashboardPage: React.FC = () => {


  return (
      <ApplicationContextConsumer>
    { appContext => (
        <div >

      <ApplicationHeaderComponent></ApplicationHeaderComponent>
      <h1>Dashboard Page</h1>

      <nav>
        <Link to={RouteConstants.Login}>Login</Link>
        <Link to={RouteConstants.FleetList}>Fleet List</Link>
      </nav>
      <div>
        Sample Counter {appContext.sampleCounter}
        <Button variant="contained" color="primary" onClick={(e)=>downButtonClicked(e, appContext)}>Down</Button>
        <Button variant="contained" color="primary" onClick={(e)=>upButtonClicked(e,appContext)}>Up</Button>
      </div>
    </div>

    )}
    </ApplicationContextConsumer>
  );

  //
  // Event Handler for Login Button Pressed
  //
  function downButtonClicked(event: MouseEvent, appContext: IApplicationContextModel) {
    const [state, dispatch] = useApplicationContext();
    context.setSampleCounter(-1);
  }

  //
  // Event Handler for Login Button Pressed
  //
  function upButtonClicked(event: MouseEvent, appContext: IApplicationContextModel) {
    const [state, dispatch] = useApplicationContext();
   dispatch()
  }
};

export default DashboardPage;
