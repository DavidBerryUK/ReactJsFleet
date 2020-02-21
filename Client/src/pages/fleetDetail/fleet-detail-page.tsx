import { RouteComponentProps }        from 'react-router';
import ApplicationHeader              from '../../components/applicationHeader/application-header-component'
import DashboardButton                from '../../components/dashboardButton/dashboard-button-component';
import DemoPageTitle                  from '../../components/demoPageTitle/demoPageTitle-component';
import FleetDetailComponent           from '../../components/fleetDetail/fleet-detail-component'
import React                          from 'react';

type PropsType = RouteComponentProps<{ id: string }>;

const FleetDetailPage: React.FC<PropsType> = (props) => {
  return (
    <div>
        <DashboardButton/>
        <ApplicationHeader></ApplicationHeader>
        <DemoPageTitle title = {`Fleet Detail:${props.match.params.id}`}/>
        <FleetDetailComponent vehicleId={Number(props.match.params.id)}></FleetDetailComponent>
    </div>
  );
}

export default FleetDetailPage;