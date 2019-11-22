import { BrowserRouter as Router }              from 'react-router-dom';
import { Redirect }                             from 'react-router-dom';
import { Route }                                from 'react-router-dom';
import DashboardPage                            from "../pages/dashboard/dashboard-page"
import FleetDetailPage                          from "../pages/fleetDetail/fleet-detail-page"
import FleetListPage                            from "../pages/fleetList/fleet-list-page"
import LoginPage                                from "../pages/login/login-page";
import React                                    from 'react';
import RouteConstants                           from "../routing/RouteConstants"

const Routes: React.SFC = () => {

    return (
        <Router>
            <div>
                <Route path={RouteConstants.Login} component={LoginPage} />
                <Route path={RouteConstants.Dashboard} component={DashboardPage} />
                <Route path={RouteConstants.FleetList} component={FleetListPage} />
                <Route path={RouteConstants.FleetDetail} component={FleetDetailPage} />
                <Route path="">
                    <Redirect to={RouteConstants.Login}/>
                </Route>
            </div>
        </Router>
    )
}

export default Routes
