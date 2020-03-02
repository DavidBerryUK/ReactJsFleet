import { Box }                                  from '@material-ui/core';
import { classStyleDefinition }                 from './classStyleDefinition';
import { Paper }                                from '@material-ui/core';
import { Typography }                           from '@material-ui/core';
import React                                    from 'react';

interface IProperties {
  title : string
}

const WidgetContainerControl: React.FC<IProperties> = (props) => {

    const classStyles = classStyleDefinition();    

  return (
    <Box p={1}>
       <Paper>
           <div className={classStyles.titleBar}>
               <Typography variant="subtitle2">
               {props.title}
               </Typography>
               </div>           
           <Box p={2}>
                {props.children}
           </Box>
       </Paper>
    </Box>
  );
}

export default WidgetContainerControl;