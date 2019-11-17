import React                          from 'react';
import ApplicationHeader              from '../../components/applicationHeader/application-header-component'
import FleetListComponent             from '../../components/fleetList/fleet-list-component'

const FleetListPage: React.FC = () => {
  return (
    <div >
        <ApplicationHeader></ApplicationHeader>
        <h1>Fleet List Page</h1>
        <FleetListComponent></FleetListComponent>
    </div>
  );
}

export default FleetListPage;