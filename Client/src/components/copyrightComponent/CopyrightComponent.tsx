import React                                    from 'react';
import Typography                               from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const CopyrightComponent: React.FC = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="https://answerdigital.com">
      Answer Digital
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
  );
}

export default CopyrightComponent;