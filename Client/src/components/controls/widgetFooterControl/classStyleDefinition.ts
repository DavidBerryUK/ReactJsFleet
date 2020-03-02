import { makeStyles }                           from '@material-ui/core/styles';

import grey from '@material-ui/core/colors/grey';

export const classStyleDefinition = makeStyles(theme => ({
  
    footer: {
      color: '#fff',      
      borderTopColor:grey[300],
      borderTopWidth:1,
      borderTopStyle:'solid',
      borderBottomLeftRadius:4,
      borderBottomRightRadius:4,
      backgroundColor:grey[100],
      padding:6,
      marginBottom:-16,
      marginLeft:-16,
      marginRight:-16      
    },
    
  }
));