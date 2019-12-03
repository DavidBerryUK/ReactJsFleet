import Box                                      from '@material-ui/core/Box';
import Link                                     from '@material-ui/core/Link';
import React                                    from 'react';
import Typography                               from '@material-ui/core/Typography';

const CopyrightComponent: React.FC = () => {
  return (
    <Box mt={8}>
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.answerdigital.com/">Answer Digital</Link>{' '}{new Date().getFullYear()}{'.'}
  </Typography>
  </Box>
  );
}

export default CopyrightComponent;