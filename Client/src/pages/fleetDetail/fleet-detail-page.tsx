import ApplicationHeader              from '../../components/applicationHeader/application-header-component'
import DashboardButton                from '../../components/dashboardButton/dashboard-button-component';
import DemoPageTitle                  from '../../components/demoPageTitle/demoPageTitle-component';
import FleetDetailComponent           from '../../components/fleetDetail/fleet-detail-component'
import React                          from 'react';

const FleetDetailPage: React.FC = () => {
  return (
    <div>
        <DashboardButton/>
        <ApplicationHeader></ApplicationHeader>
        <DemoPageTitle title="Fleet Detail"/>
        <FleetDetailComponent></FleetDetailComponent>
    </div>
  );
}

export default FleetDetailPage;