import { useHistory } from "react-router-dom";

export default class NavigationBase  {    

    routeTo(route: string) {
        
        var history = useHistory();
        history.push(route);
    }
}