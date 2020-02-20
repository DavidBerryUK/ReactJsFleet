export default class paginationModel {

     page: number;
     pageCount: number;
     pageNumbers: Array<number>;
     showFirstPageButton : boolean;
     showSkipPreviousPageButton : boolean;
     showPreviousPageButton : boolean;
     showLastPageButton : boolean;
     showNextPageButton : boolean;
     showSkipNextPageButton : boolean;

     private numbersToShowEachSideOfCurrentPage : number = 4;
     private firstPage : number = 0;
     private lastPage : number = 0;

     constructor(page: number, pageCount: number) {        
         this.page = page;
         this.pageCount = pageCount;
         this.calculateFirstPage();
         this.calculateLastPage();
         this.adjustPageRange()
         this.pageNumbers = this.createPageNumbers()
         this.showFirstPageButton = this.page > 1;
         this.showSkipPreviousPageButton = this.page > 1;
         this.showPreviousPageButton = this.page > 1;
         this.showLastPageButton = ( this.page < this.pageCount)
         this.showNextPageButton = ( this.page < this.pageCount)
         this.showSkipNextPageButton = ( this.page < this.pageCount)         
     }

    private calculateFirstPage() {
        this.firstPage = this.page - this.numbersToShowEachSideOfCurrentPage;
        if (this.firstPage < 1) {
            this.firstPage = 1;
        }        
    }

    private calculateLastPage() {
        this.lastPage = this.firstPage + ( this.numbersToShowEachSideOfCurrentPage * 2 );
        if (this.lastPage > this.pageCount) {
            this.lastPage = this.pageCount;
        }
        return this.lastPage
    }

    private adjustPageRange() {
        let range = this.lastPage - this.firstPage;
        if ( range < (this.numbersToShowEachSideOfCurrentPage * 2)) {
            this.firstPage = this.lastPage - (this.numbersToShowEachSideOfCurrentPage * 2)
            if (this.firstPage < 1) {
                this.firstPage = 1                
            }
        } 
    }

    private createPageNumbers(): Array<number> {
        let pageArray = Array<number>();
        for (var i = this.firstPage; i <= this.lastPage; i++) {
            pageArray.push(i)
        }
        return pageArray;
    }
}