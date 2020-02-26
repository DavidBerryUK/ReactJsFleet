import { RouteComponentProps }                  from 'react-router';
import ApplicationHeader                        from '../../components/applicationHeader/application-header-component'
import FleetDetailComponent                     from '../../components/fleetDetail/fleet-detail-component'
import React                                    from 'react';

type PropsType = RouteComponentProps<{ id: string }>;

const FleetDetailPage: React.FC<PropsType> = (props) => {
  return (
    <div>
        <ApplicationHeader></ApplicationHeader>
        <FleetDetailComponent vehicleId={Number(props.match.params.id)}></FleetDetailComponent>
    </div>
  );
}

export default FleetDetailPage;