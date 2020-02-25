import { ContextOneConsumer }                   from '../../services/applicationContext/OneContext';
import React                                    from 'react';

const ApplicationHeaderComponent: React.FC = () => {
  return (
    <ContextOneConsumer>
      {appContext => (
        <div >
          <h1>Application Header</h1>
          logged in:
        </div>
      )}
    </ContextOneConsumer>
  );
}

export default ApplicationHeaderComponent;