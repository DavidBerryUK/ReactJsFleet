import { RouteComponentProps }                  from 'react-router';
import CopyrightControl                         from '../../controls/copyrightControl/CopyrightControl';
import React                                    from 'react';
import VehicleEditWidget                        from '../../widgets/vehicleEditWidget/vehicleEditWidget';

type PropsType = RouteComponentProps<{ id: string }>;

const VehicleDetailEditPage: React.FC<PropsType> = (props) => {
  return (
    <>
      <VehicleEditWidget vehicleId={Number(props.match.params.id)}/>
      <CopyrightControl />
    </>
  );
}

export default VehicleDetailEditPage;