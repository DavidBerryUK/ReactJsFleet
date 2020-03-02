import { RouteComponentProps }                  from 'react-router';
import FleetViewWidget                        from '../../widgets/fleetViewWidget/fleetViewWidget'
import React                                    from 'react';

type PropsType = RouteComponentProps<{ id: string }>;

const FleetDetailPage: React.FC<PropsType> = (props) => {
  return (
      <FleetViewWidget vehicleId={Number(props.match.params.id)}></FleetViewWidget>
  );
}

export default FleetDetailPage;