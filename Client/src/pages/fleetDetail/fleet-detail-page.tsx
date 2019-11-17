import React                          from 'react';
import ApplicationHeader              from '../../components/applicationHeader/application-header-component'
import FleetDetailComponent           from '../../components/fleetDetail/fleet-detail-component'

const FleetDetailPage: React.FC = () => {
  return (
    <div >
        <ApplicationHeader></ApplicationHeader>
        <h1>Fleet Detail Page</h1>
        <FleetDetailComponent></FleetDetailComponent>
    </div>
  );
}

export default FleetDetailPage;