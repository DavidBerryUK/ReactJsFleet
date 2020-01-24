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

     constructor(page: number, pageCount: number) {
         this.page = page;
         this.pageCount = pageCount;
         this.pageNumbers = this.createPageNumbers()
         this.showFirstPageButton = this.page > 1;
         this.showSkipPreviousPageButton = this.page > 1;
         this.showPreviousPageButton = this.page > 1;
         this.showLastPageButton = ( this.page < this.pageCount)
         this.showNextPageButton = ( this.page < this.pageCount)
         this.showSkipNextPageButton = ( this.page < this.pageCount)
     }

    private firstPage(): number {
        var firstPage : number = this.page - 4;
        if (firstPage < 1) {
            firstPage = 1;
        }
        return firstPage
    }

    private lastPage(): number {
        var lastPage = this.firstPage() + 8;
        if (lastPage > this.pageCount) {
            lastPage = this.pageCount;
        }
        return lastPage
    }

    private createPageNumbers(): Array<number> {
        let pageArray = Array<number>();
        for (var i = this.firstPage(); i <= this.lastPage(); i++) {
            pageArray.push(i)
        }
        return pageArray;
    }
}