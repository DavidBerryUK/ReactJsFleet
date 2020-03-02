import { Box }                                  from '@material-ui/core';
import { Typography }                           from '@material-ui/core';
import { classStyleDefinition }                 from './classStyleDefinition';
import React                                    from 'react';

interface IProperties {
  label: string
}

const TextSubHeaderControl: React.FC<IProperties> = (props) => {
  
    const classStyles = classStyleDefinition();    

  return (
    <Box >
      <Typography variant="h6" className={classStyles.label}>{props.label}</Typography>      
    </Box>
  );
}

export default TextSubHeaderControl