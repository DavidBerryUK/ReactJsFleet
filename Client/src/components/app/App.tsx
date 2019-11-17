import React                          from 'react';
import LoginComponent                 from '../login/login-component'
import './App.scss';



const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">        
        <LoginComponent></LoginComponent>
      </header>
    </div>
  );
}

export default App;
