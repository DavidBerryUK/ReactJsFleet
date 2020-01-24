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

    const [pageModel, setpageModel] = React.useState(new paginationModel(props.page, props.pageCount));

    useMemo(() => {
        setpageModel(new paginationModel(props.page, props.pageCount))
    }, [props.page, props.pageCount]);

    function changePage(page : number ) {
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
            {pageModel.showFirstPageButton && <Button><SkipPreviousIcon fontSize="small" onClick={() => {changePage(1)}}/></Button>}
            {pageModel.showSkipPreviousPageButton && <Button><FastRewindIcon fontSize="small" onClick={() => {changePage(pageModel.page - 10 )}} /></Button>}
            {pageModel.showPreviousPageButton && <Button><NavigateBeforeIcon fontSize="small" onClick={() => {changePage(pageModel.page - 1 )}}/></Button>}     
            {pageModel.pageNumbers.map((item: number, key) => (
                (item === pageModel.page ?
                    <Button key={`${item}`} color="secondary" variant="contained"  onClick={() => {changePage(item )}}>{item}</Button> :
                    <Button key={`${item}`} onClick={() => {changePage(item)}} >{item}</Button>)

            ))}
            {pageModel.showSkipNextPageButton && <Button><NavigateNextIcon fontSize="small" onClick={() => {changePage(pageModel.page + 1)}}/></Button>}
            {pageModel.showNextPageButton && <Button><FastForwardIcon fontSize="small" onClick={() => {changePage(pageModel.page + 10)}}/></Button>}
            {pageModel.showLastPageButton && <Button><SkipNextIcon fontSize="small" onClick={() => {changePage(pageModel.pageCount)}}/></Button>}
        </ButtonGroup>
    );
}

export default PaginationButtons;


