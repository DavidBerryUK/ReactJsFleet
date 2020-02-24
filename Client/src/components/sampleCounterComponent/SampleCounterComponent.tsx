import { ApplicationContext }           from '../../services/applicationContext/ApplicationContext';
import { Button, Box }                          from '@material-ui/core';
import { createStyles }                         from '@material-ui/core';
import { IApplicationContextAction }            from '../../services/applicationContext/interfaces/IApplicationContextAction';
import { IApplicationContextState }             from '../../services/applicationContext/interfaces/IApplicationContextState';
import { makeStyles }                           from '@material-ui/core';
import { Paper }                                from '@material-ui/core';
import { Theme }                                from '@material-ui/core';
import React                                    from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
        paper : {
            width:180,
            margin:10,
            padding:10
        }
  })
);

const SampleCounterComponent: React.FC = () => {

    const classes = useStyles();

    function subtractEventHandler(appContext: IApplicationContextState & IApplicationContextAction, event : React.MouseEvent) {    
        console.log("click - subtract");
        appContext.setSampleCounterDelta(-1);
    }
  
    function addEventHandler(appContext: IApplicationContextState & IApplicationContextAction, event : React.MouseEvent) {    
        console.log("click - Add");
        appContext.setSampleCounterDelta(1);
    }

    return (
        <ApplicationContext.Consumer>
            {appContext => (
                <Paper elevation={3} className={classes.paper}>
                    <div>
                    Sample Count: {appContext.sampleCounter}
                    </div>
                    <Box   display="flex" >
                        <Box p={1}><Button variant="contained" onClick={ (event: React.MouseEvent ) => {subtractEventHandler(appContext, event)}}>-</Button></Box>
                        <Box p={1}><Button variant="contained" onClick={ (event: React.MouseEvent ) => {addEventHandler(appContext, event)}}>+</Button></Box>
                    </Box>
                </Paper>
            )}
        </ApplicationContext.Consumer>
    )
}

export default SampleCounterComponent