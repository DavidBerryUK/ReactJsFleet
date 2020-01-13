import { Button }                               from '@material-ui/core';
import { makeStyles }                           from '@material-ui/styles';
import React                                    from 'react';
import RouteConstants                           from '../../routing/RouteConstants';

const DashboardButton: React.FC = () => {

    const useStyles = makeStyles(theme => ({
        button: {
            position: "absolute",
            width: 150,
            right:4,
            top:4
        }
    }));

    const classes = useStyles();

    return (
        <Button variant="contained" 
                color="primary" 
                className={classes.button} 
                href={RouteConstants.Dashboard}>Dashboard</Button>
    );
}

export default DashboardButton;