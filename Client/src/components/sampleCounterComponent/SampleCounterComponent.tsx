import { Button, Box }                          from '@material-ui/core';
import { createStyles }                         from '@material-ui/core';
import { makeStyles }                           from '@material-ui/core';
import { Paper }                                from '@material-ui/core';
import { Theme }                                from '@material-ui/core';
import { useContext }                           from 'react';
import ContextOne                               from '../../services/applicationContext/OneContext';
import React                                    from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            width: 180,
            margin: 10,
            padding: 10
        }
    })
);

const SampleCounterComponent: React.FC = () => {

    const classes = useStyles();
    const { state, dispatch } = useContext(ContextOne);

    function subtractEventHandler() {
        console.log("click - subtract");
        dispatch({ type: "subtract" });
    }

    function addEventHandler() {
        console.log("click - Add");
        dispatch({ type: "add" });
    }

    return (
        <Paper elevation={3} className={classes.paper}>
            <div>
                Sample Count: {state.sampleCounter}
            </div>
            <Box display="flex" >
                <Box p={1}><Button variant="contained" onClick={subtractEventHandler}>-</Button></Box>
                <Box p={1}><Button variant="contained" onClick={addEventHandler}>+</Button></Box>
            </Box>
        </Paper>
    )
}

export default SampleCounterComponent