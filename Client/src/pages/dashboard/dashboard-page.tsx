import { ApplicationContextConsumer }           from '../../services/applicationContext/ApplicationContext'
import { IApplicationContextState }             from '../../services/applicationContext/interfaces/IApplicationContextState';
import { Link }                                 from 'react-router-dom';
import { MouseEvent }                           from 'react';
// import { useContext }                           from 'react';
import ApplicationHeaderComponent               from '../../components/applicationHeader/application-header-component';
import Button                                   from '@material-ui/core/Button';
import React                                    from 'react';
import RouteConstants                           from '../../routing/RouteConstants';


  

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
        <Button variant="contained" color="primary" onClick={()=>{ setstate}}>test</Button>
      </div>
    </div>

    )}
    </ApplicationContextConsumer>
  );

  //
  // Event Handler for Login Button Pressed
  //
  function downButtonClicked(event: MouseEvent, appContext: IApplicationContextState) {
    console.log(appContext);
    //const useApplicationContext = useContext<IApplicationContextState>(ApplicationContext);
    //console.log(useApplicationContext.isLoggedIn)
  }

  //
  // Event Handler for Login Button Pressed
  //
  function upButtonClicked(event: MouseEvent, appContext: IApplicationContextState) {
    console.log(appContext);
    appContext.s
   // const useApplicationContext = useContext<IApplicationContextState>(ApplicationContext);
   // console.log(useApplicationContext.isLoggedIn)
  }
};

export default DashboardPage;
