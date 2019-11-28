import  { ApplicationContextProvider }          from '../../services/applicationContext/ApplicationContext'
import './App.scss';
import ApplicationContextModel                  from '../../services/applicationContext/models/ApplicationContextModel';
import LoginComponent                           from '../login/login-component'
import React                                    from 'react';


const App: React.FC = () => {
  return (
    <ApplicationContextProvider value={ new ApplicationContextModel(0)}>
    <div className="App">
      <header className="App-header">        
        <LoginComponent></LoginComponent>
      </header>
      
    </div>
    </ApplicationContextProvider>
  );
}

export default App;
