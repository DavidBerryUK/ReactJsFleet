import LoginComponent                           from '../../components/login/login-component'
import React                                    from 'react';

const LoginPage: React.FC = () => {
  return (
    <div >
      <h1>Client Portal Login</h1>
      <LoginComponent></LoginComponent>
      </div>
  );  
}

export default LoginPage;