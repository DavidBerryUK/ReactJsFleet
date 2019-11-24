import React                                    from 'react';
import LoginComponent                           from '../login/login-component'
import './App.scss';
import  { ApplicationContextProvider }          from '../../services/applicationContext/ApplicationContext'
import { ApplicationContextModelInstance }      from '../../services/applicationContext/ApplicationContext'



const App: React.FC = () => {
  return (
    <ApplicationContextProvider value={ApplicationContextModelInstance}>
    <div className="App">
      <header className="App-header">        
        <LoginComponent></LoginComponent>
      </header>
      
    </div>
    </ApplicationContextProvider>
  );
}

export default App;
