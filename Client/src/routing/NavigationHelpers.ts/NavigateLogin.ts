import NavigationBase                           from "./NavigationBase";
import RouteConstants                           from "../RouteConstants";

export default class NavigateLogin extends NavigationBase {

    public go() {
        this.routeTo(RouteConstants.Login)
    }
}