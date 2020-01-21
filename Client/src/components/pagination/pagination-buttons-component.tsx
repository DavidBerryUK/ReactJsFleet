import { Button }                               from '@material-ui/core';
import { makeStyles }                           from '@material-ui/styles';
import FastForwardIcon                          from '@material-ui/icons/FastForward';
import FastRewindIcon                           from '@material-ui/icons/FastRewind';
import NavigateBeforeIcon                       from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon                         from '@material-ui/icons/NavigateNext';
import React                                    from 'react';
import SkipNextIcon                             from '@material-ui/icons/SkipNext';
import SkipPreviousIcon                         from '@material-ui/icons/SkipPrevious';

const PaginationButtons: React.FC = () => {

    const useStyles = makeStyles(theme => ({
        button: {            
            minWidth:34,
             marginLeft: 2,
             marginRight: 2,
             marginTop: 4,
             marginBottom: 4
        }
    }));

    const classes = useStyles();
    const pages = 20
    const page = 10

    const showFirstPageButton = page > 1;
    const showSkipPreviousPageButton = page > 1;
    const showPreviousPageButton = true;

    const showLastPageButton = ( page < pages )
    const showNextPageButton = ( page < pages )
    const showSkipNextPageButton = ( page < pages )

    function firstPage() :  number {
        var firstPage = page - 4;
        if (firstPage < 1) {
            firstPage = 1;
        }        
        return firstPage
    }

    function lastPage() :  number {
        var lastPage = firstPage() + 9;
        if (lastPage > pages) {
            lastPage = pages;
        }
        return lastPage
    }

    function pageNumbers() : Array<Number> {
        let pageArray = Array<Number>();
        for (var i = firstPage(); i < lastPage(); i++) {
            pageArray.push(i)
        }
        return pageArray;
    }

    return (
        <div className="text-center">
            <div>
                {showFirstPageButton && <Button  size="small"  variant="contained" className={classes.button} ><SkipPreviousIcon /></Button>}
                {showSkipPreviousPageButton && <Button  size="small"  variant="contained" className={classes.button} ><FastRewindIcon /></Button>}
                {showPreviousPageButton && <Button size="small"  variant="contained" className={classes.button} ><NavigateBeforeIcon /></Button>}         
                {pageNumbers().map(page => (
                    <Button key= {`${page}`} size="small"  variant="contained" className={classes.button} >{page}</Button>
                ))}
                {showSkipNextPageButton && <Button  size="small" variant="contained" className={classes.button} ><NavigateNextIcon /></Button>}
                {showNextPageButton && <Button size="small"  variant="contained" className={classes.button} ><FastForwardIcon /></Button>}
                {showLastPageButton && <Button  size="small" variant="contained" className={classes.button} ><SkipNextIcon /></Button>}
            </div>
        </div>
    );
}

export default PaginationButtons;