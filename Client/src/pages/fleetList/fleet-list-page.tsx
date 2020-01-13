import ApplicationHeader              from '../../components/applicationHeader/application-header-component'
import DashboardButton                from '../../components/dashboardButton/dashboard-button-component';
import DemoPageTitle                  from '../../components/demoPageTitle/demoPageTitle-component';
import FleetListComponent             from '../../components/fleetList/fleet-list-component'
import React                          from 'react';

const FleetListPage: React.FC = () => {
  return (
    <div >
        <DashboardButton/>
        <DemoPageTitle title="Fleet List"/>
        <ApplicationHeader></ApplicationHeader>        
        <FleetListComponent></FleetListComponent>
    </div>
  );
}

export default FleetListPage;