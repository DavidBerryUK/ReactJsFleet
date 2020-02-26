import { RouteComponentProps }                  from 'react-router';
import FleetDetailComponent                     from '../../components/fleetDetail/fleet-detail-component'
import React                                    from 'react';

type PropsType = RouteComponentProps<{ id: string }>;

const FleetDetailPage: React.FC<PropsType> = (props) => {
  return (
      <FleetDetailComponent vehicleId={Number(props.match.params.id)}></FleetDetailComponent>
  );
}

export default FleetDetailPage;