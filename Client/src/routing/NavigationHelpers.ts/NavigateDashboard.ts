import NavigationBase                           from "./NavigationBase";
import RouteConstants                           from "../RouteConstants";

export default class NavigateDashboard extends NavigationBase {

    public go() {
        //this.routeTo(RouteConstants.Dashboard)
    }

    public static go(history: any ) {
        history.push(RouteConstants.Dashboard);
    }
}