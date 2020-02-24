import { ApplicationContext }                   from '../../services/applicationContext/ApplicationContext'
import React                                    from 'react';

const ApplicationHeaderComponent: React.FC = () => {
  return (
    <ApplicationContext.Consumer>
    { appContext => (
        <div >
          <h1>Application Header</h1>
          logged in: {appContext.isLoggedIn}
        </div>
    )}
    </ApplicationContext.Consumer>
  );
}

export default ApplicationHeaderComponent;