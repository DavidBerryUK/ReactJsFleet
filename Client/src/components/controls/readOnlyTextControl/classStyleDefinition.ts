import { makeStyles }                           from '@material-ui/core/styles';
import grey                                     from '@material-ui/core/colors/grey';

export const classStyleDefinition = makeStyles(theme => ({
  
    label: {
      color: grey['600']
    },
    value : {
      marginBottom:24,
      borderBottomWidth:1,
      borderBottomStyle:"solid",
      borderBottomColor:grey['400'],      
    }
  }
));