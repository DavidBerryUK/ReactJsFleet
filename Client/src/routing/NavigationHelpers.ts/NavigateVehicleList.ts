import NavigationBase                           from "./NavigationBase";
import RouteConstants                           from "../RouteConstants";

export default class NavigateVehicleList extends NavigationBase {

    public go() {
        this.routeTo(RouteConstants.VehicleList)
    }
}