import  { ApplicationContextProvider }          from '../../services/applicationContext/ApplicationContext'
import './App.scss';
import ApplicationContextModel                  from '../../services/applicationContext/models/ApplicationContextModel';
import CssBaseline                              from '@material-ui/core/CssBaseline';
import React                                    from 'react';

const App: React.FC = () => {
  return (
    <ApplicationContextProvider value={ new ApplicationContextModel(0)}>
      <CssBaseline/>
    <div className="App"></div>
    </ApplicationContextProvider>
  );
}

export default App;
