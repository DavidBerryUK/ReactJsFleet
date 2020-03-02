import { Typography }                           from '@material-ui/core';
import { classStyleDefinition }                 from './classStyleDefinition';
import React                                    from 'react';

interface IProperties {
  label: string
}

const TextSubHeaderControl: React.FC<IProperties> = (props) => {
  
  const classStyles = classStyleDefinition();    

  return (
      <Typography variant="h6" className={classStyles.label}>{props.label}</Typography>      
  );
}

export default TextSubHeaderControl