import NavigationBase                           from "./NavigationBase";
import RouteConstants                           from "../RouteConstants";

export default class NavigateFleetList extends NavigationBase {

    public go() {
        this.routeTo(RouteConstants.FleetList)
    }
}