import { makeStyles } from '@material-ui/core/styles';

export const classStyleDefinition = makeStyles(theme => ({
    card: {
      padding: theme.spacing(2),
      paddingBottom:theme.spacing(4),
    },
    paper: {
      marginTop: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 3),
    },
    loginMessage: {
      textAlign:"center",
      marginBottom: theme.spacing(3),
    }
  }));


  