import { Route }                                from 'react-router-dom';
import { Switch }                               from 'react-router-dom';
import DashboardPage                            from "../components/pages/dashboardPage/dashboardPage"
import DefectSheetPage                          from '../components/pages/defectSheetPage/defectSheetPage';
import FleetDetailPage                          from "../components/pages/fleetDetailPage/fleetDetailPage"
import FleetListPage                            from "../components/pages/fleetListPage/fleetListPage"
import LoginPage                                from "../components/pages/loginPage/loginPage";
import MaintainUsersPage                        from '../components/pages/maintainUsersPage/maintainUsersPage';
import React                                    from 'react';
import RouteConstants                           from "../routing/RouteConstants"

const Routes: React.SFC = () => {

    return (
        <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route path={`${RouteConstants.FleetDetail}/:id`} component={FleetDetailPage} />
        <Route path={RouteConstants.Dashboard} component={DashboardPage} />
        <Route path={RouteConstants.DefectSheet} component={DefectSheetPage} />
        <Route path={RouteConstants.FleetList} component={FleetListPage} />
        <Route path={RouteConstants.Login} component={LoginPage} />
        <Route path={RouteConstants.MaintainUsers} component={MaintainUsersPage} />
      </Switch>
    )
}

export default Routes
