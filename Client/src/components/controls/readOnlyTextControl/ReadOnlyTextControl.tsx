import { Box }                                  from '@material-ui/core';
import { classStyleDefinition }                 from './classStyleDefinition';
import { Typography }                           from '@material-ui/core';
import React                                    from 'react';

interface IProperties {
  label: string,  
  maxWidth?: any,
  value: string | number | Number | null | undefined
}

const ReadOnlyTextControl: React.FC<IProperties> = (props) => {

  const classStyles = classStyleDefinition();    

  return (
    <Box maxWidth={props.maxWidth} pr={2}>
      <Typography className={classStyles.label} variant="caption">{props.label}</Typography>
      <Typography className={classStyles.value} variant="body1">{props.value}</Typography>      
    </Box>
  );
}

export default ReadOnlyTextControl