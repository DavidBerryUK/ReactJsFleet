import { makeStyles }                           from '@material-ui/core/styles';

import grey from '@material-ui/core/colors/grey';

export const classStyleDefinition = makeStyles(theme => ({
  
    titleBar: {
      color: '#fff',      
      borderTopLeftRadius:4,
      borderTopRightRadius:4,
      backgroundColor:grey[700],
      padding:6
    },
    
  }
));