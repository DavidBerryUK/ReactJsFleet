import { makeStyles }                           from '@material-ui/styles';
import { Paper }                                from '@material-ui/core';
import { Typography }                           from '@material-ui/core';
import React                                    from 'react';

interface IDemoPageTitleProperties {
    title : string
  }

const DemoPageTitle: React.FC<IDemoPageTitleProperties> = (props) => {

    const useStyles = makeStyles(theme => ({
        
        paper: {
            position: "absolute",
            width: 150,
            height:40,
            left:4,
            top:4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop:5,
            opacity:0.65
          },
    }));

    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
             <Typography variant="h6">{props.title}</Typography>
        </Paper>
    );
}

export default DemoPageTitle;