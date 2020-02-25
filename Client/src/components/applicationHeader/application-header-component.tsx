import { useContext, useMemo }                                           from 'react';
import ApplicationContext                                               from '../../services/applicationContext/ApplicationContext';
import React                                                    from 'react';

const ApplicationHeaderComponent: React.FC = () => {

  const  state = useContext(ApplicationContext).state;
  
  useMemo(() => {
    console.log("ApplicationHeaderComponent -- user state");
    console.log(state.userState);
  },[state.userState])

  return (
    <>        
      <h1>Application Header: LoggedIn: {state.userState.user?.forename} {state.userState.user?.surname}</h1>
    </>
  );
}

export default ApplicationHeaderComponent;