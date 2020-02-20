import { Button }                               from '@material-ui/core';
import { ButtonGroup }                          from '@material-ui/core';
import { useMemo }                              from 'react';
import FastForwardIcon                          from '@material-ui/icons/FastForward';
import FastRewindIcon                           from '@material-ui/icons/FastRewind';
import NavigateBeforeIcon                       from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon                         from '@material-ui/icons/NavigateNext';
import paginationModel                          from './paginationModel';
import React                                    from 'react';
import SkipNextIcon                             from '@material-ui/icons/SkipNext';
import SkipPreviousIcon                         from '@material-ui/icons/SkipPrevious';

interface IPaginationProperties {
    page : number,
    pageCount : number,
    onPageChanged : (page: number) => void
}

const PaginationButtons: React.FC<IPaginationProperties> = (props) => {        

console.log(`create PaginationButtons component, page:${props.page}`)

    const [pageModel, setpageModel] = React.useState(new paginationModel(props.page, props.pageCount));

    useMemo(() => {        
        console.log(`user Memo executed page:${props.page}  pageCount:${props.pageCount}`);        
        setpageModel(new paginationModel(props.page, props.pageCount))
    }, [props.page, props.pageCount]);

    function changePageClickHandler(page : number ) {
        if ( page < 1) {            
            page = 1;
        }
        if ( page > pageModel.pageCount) {            
            page = pageModel.pageCount;
        }
        if ( page !== pageModel.page ) {                    
            props.onPageChanged(page);             
        }          
    }

    return (
        <ButtonGroup color="primary" >
            <Button disabled={!pageModel.showFirstPageButton}><SkipPreviousIcon fontSize="small" onClick={() => {changePageClickHandler(1)}}/></Button>
            <Button disabled={!pageModel.showSkipPreviousPageButton}><FastRewindIcon fontSize="small" onClick={() => {changePageClickHandler(pageModel.page - 10 )}} /></Button>
            <Button disabled={!pageModel.showPreviousPageButton}><NavigateBeforeIcon fontSize="small" onClick={() => {changePageClickHandler(pageModel.page - 1 )}}/></Button>    
            {pageModel.pageNumbers.map((item: number) => (
                (item === pageModel.page ?
                    <Button key={`${item}`} color="secondary" variant="contained"  onClick={() => {changePageClickHandler(item )}}>{item}</Button> :
                    <Button key={`${item}`} onClick={() => {changePageClickHandler(item)}} >{item}</Button>)
            ))}
            <Button disabled={!pageModel.showSkipNextPageButton}><NavigateNextIcon fontSize="small" onClick={() => {changePageClickHandler(pageModel.page + 1)}}/></Button>
            <Button disabled={!pageModel.showNextPageButton}><FastForwardIcon fontSize="small" onClick={() => {changePageClickHandler(pageModel.page + 10)}}/></Button>
            <Button disabled={!pageModel.showLastPageButton}><SkipNextIcon fontSize="small" onClick={() => {changePageClickHandler(pageModel.pageCount)}}/></Button>
        </ButtonGroup>
    );
}

export default PaginationButtons;


