import NavigationBase                           from "./NavigationBase";
import RouteConstants                           from "../RouteConstants";

export default class NavigateFleetDetail extends NavigationBase {

    public go() {
        this.routeTo(RouteConstants.FleetDetail)
    }
}