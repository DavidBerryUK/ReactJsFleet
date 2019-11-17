import React                          from 'react';
import Button                         from '@material-ui/core/Button';
import IconLock                       from '@material-ui/icons/Lock'
import TextField                      from '@material-ui/core/TextField';

const LoginComponent: React.FC = () => {
  return (
    <div >
      <form noValidate autoComplete="off">
      <div>
      <TextField required label="User Name"></TextField>
      </div>
      <div>
      <TextField required label="Password"></TextField>
      </div>
      <Button variant="contained" color="primary">Login</Button>
      <IconLock></IconLock>
      </form>
    </div>
  );
}

export default LoginComponent;