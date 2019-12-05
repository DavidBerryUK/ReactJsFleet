import { ApplicationContextConsumer }           from '../../services/applicationContext/ApplicationContext'
import React                                    from 'react';

const ApplicationHeaderComponent: React.FC = () => {
  return (
    <ApplicationContextConsumer>
    { appContext => (
        <div >
          <h1>Application Header</h1>
          logged in: {appContext.isLoggedIn}
        </div>
    )}
    </ApplicationContextConsumer>
  );
}

export default ApplicationHeaderComponent;