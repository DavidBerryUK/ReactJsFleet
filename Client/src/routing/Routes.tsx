import { Route }                                from 'react-router-dom';
import { Switch }                               from 'react-router-dom';
import DashboardPage                            from "../pages/dashboard/dashboard-page"
import DefectSheetPage                          from '../pages/defectSheet/defect-sheet-page';
import FleetDetailPage                          from "../pages/fleetDetail/fleet-detail-page"
import FleetListPage                            from "../pages/fleetList/fleet-list-page"
import LoginPage                                from "../pages/login/login-page";
import React                                    from 'react';
import RouteConstants                           from "../routing/RouteConstants"

const Routes: React.SFC = () => {

    return (
        <section>
            <Switch>                
                <Route exact path="/" component={DashboardPage} />
                <Route path={RouteConstants.Dashboard} component={DashboardPage} />
                <Route path={RouteConstants.DefectSheet} component={DefectSheetPage} />
                <Route path={`${RouteConstants.FleetDetail}/:id`} component={FleetDetailPage} />
                <Route path={RouteConstants.FleetList} component={FleetListPage} />
                <Route path={RouteConstants.Login} component={LoginPage} />                
            </Switch>
        </section>
    )
}

export default Routes
