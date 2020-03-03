import { RouteComponentProps }                  from 'react-router';
import CopyrightControl                         from '../../controls/copyrightControl/CopyrightControl';
import React                                    from 'react';
import VehicleViewWidget                        from '../../widgets/vehicleViewWidget/VehicleViewWidget'

type PropsType = RouteComponentProps<{ id: string }>;

const VehicleDetailViewPage: React.FC<PropsType> = (props) => {
  return (
    <>
      <VehicleViewWidget vehicleId={Number(props.match.params.id)}/>
      <CopyrightControl />
    </>
  );
}

export default VehicleDetailViewPage;