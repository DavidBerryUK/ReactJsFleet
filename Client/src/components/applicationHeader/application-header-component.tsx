import { useContext, useMemo }                                           from 'react';
import ContextOne                                               from '../../services/applicationContext/OneContext';
import React                                                    from 'react';

const ApplicationHeaderComponent: React.FC = () => {

  const  state = useContext(ContextOne).state;
  
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