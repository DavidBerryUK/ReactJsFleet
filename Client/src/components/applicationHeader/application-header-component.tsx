import React                                    from 'react';
import { ApplicationContextConsumer }           from '../../services/applicationContext/ApplicationContext'

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