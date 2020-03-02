import { Route }                                from 'react-router-dom';
import { Switch }                               from 'react-router-dom';
import DashboardPage                            from "../components/pages/dashboardPage/dashboardPage"
import DefectSheetPage                          from '../components/pages/defectSheetPage/defectSheetPage';
import VehicleDetailEditPage                    from '../components/pages/vehicleDetailEditPage/VehicleDetailEditPage';
import VehicleDetailViewPage                    from "../components/pages/vehicleDetailViewPage/VehicleDetailViewPage"
import VehicleListPage                          from "../components/pages/vehicleListPage/VehicleListPage"
import LoginPage                                from "../components/pages/loginPage/loginPage";
import MaintainUsersPage                        from '../components/pages/maintainUsersPage/maintainUsersPage';
import React                                    from 'react';
import RouteConstants                           from "../routing/RouteConstants"

const Routes: React.SFC = () => {

    return (
        <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route path={RouteConstants.VehicleDetailView} component={VehicleDetailViewPage} />
        <Route path={RouteConstants.VehicleDetailEdit} component={VehicleDetailEditPage} />
        <Route path={RouteConstants.Dashboard} component={DashboardPage} />
        <Route path={RouteConstants.DefectSheet} component={DefectSheetPage} />
        <Route path={RouteConstants.VehicleList} component={VehicleListPage} />
        <Route path={RouteConstants.Login} component={LoginPage} />
        <Route path={RouteConstants.MaintainUsers} component={MaintainUsersPage} />
      </Switch>
    )
}

export default Routes
