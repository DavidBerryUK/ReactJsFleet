import CookieHelper                             from "./CookieHelper";


//
// session manager is used by the security service to manager
// the users session
//
// this manager persists token data to a cookie incase the user
// reloads the page. using the token the application can
// get all the data it needs from the server
//

export default class TokenCookies {

    private static keyTokenValue = 'TOKEN_VALUE';
    private static keyTokenIssueDate = 'TOKEN_ISSUE_DATE';
    private static keyTokenExpiryDate = 'TOKEN_EXPIRY_DATE';
    
    private tokenValue?: string;
    private tokenExpiryDate?: Date;
    private tokenIssueDate?: Date;   

    delete() {
        CookieHelper.delete(TokenCookies.keyTokenValue);
        CookieHelper.delete(TokenCookies.keyTokenIssueDate);
        CookieHelper.delete(TokenCookies.keyTokenExpiryDate);
    }

    //
    // token value
    //
    set token (token: string ) {
        CookieHelper.create(TokenCookies.keyTokenValue, token, 1);
        this.tokenValue = token;
    }

    get token(): string {
        if (!this.tokenValue) {
            this.tokenValue = CookieHelper.read(TokenCookies.keyTokenValue)!;
        }
        return this.tokenValue!;
    }

    //
    // issue date
    //
    set issueDate(issueDate: Date) {
        CookieHelper.create(TokenCookies.keyTokenIssueDate, issueDate.toUTCString(), 1);
        this.tokenIssueDate = issueDate;
    }

    get issueDate(): Date {
        if (!this.tokenIssueDate) {
            var cookieValue = CookieHelper.read(TokenCookies.keyTokenIssueDate);
            this.tokenIssueDate = new Date(cookieValue!);
        }
        return this.tokenIssueDate;
    }


    //
    // issue date
    //
    set expiryDate(expiryDate: Date) {
        CookieHelper.create(TokenCookies.keyTokenExpiryDate, expiryDate.toUTCString(), 1);
        this.tokenExpiryDate = expiryDate;
    }

    get expiryDate(): Date {
        if (!this.tokenExpiryDate) {
            var cookieValue = CookieHelper.read(TokenCookies.keyTokenExpiryDate);
            this.tokenExpiryDate = new Date(cookieValue!);
        }
        return this.tokenExpiryDate;
    }

}