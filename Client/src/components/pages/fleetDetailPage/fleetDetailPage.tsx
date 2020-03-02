import { RouteComponentProps }                  from 'react-router';
import FleetDetailWidget                        from '../../widgets/fleetDetailWidget/fleetDetailWidget'
import React                                    from 'react';

type PropsType = RouteComponentProps<{ id: string }>;

const FleetDetailPage: React.FC<PropsType> = (props) => {
  return (
      <FleetDetailWidget vehicleId={Number(props.match.params.id)}></FleetDetailWidget>
  );
}

export default FleetDetailPage;