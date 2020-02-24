import { Button }                               from '@material-ui/core';
import { useMemo }                              from 'react';
import ApiBaseItemResponseModel                 from '../../models/apiBase/ApiBaseItemResponseModel';
import React                                    from 'react';
import RepositoryVehicleItem                    from '../../repository/vehicle/RepositoryVehicleItem';
import RouteConstants                           from '../../routing/RouteConstants';
import VehicleModel                             from '../../models/vehicle/VehicleModel';

interface IProperties {
  vehicleId: number;
}

const FleetDetailComponent: React.FC<IProperties> = (props) => {

  const [vehicleItem, setVehicleItem] = React.useState(new ApiBaseItemResponseModel<VehicleModel>());

  useMemo(() => {
    var repositoryVehicle = new RepositoryVehicleItem();
    repositoryVehicle.getVehicleById(props.vehicleId)
      .onSuccess((vehicleData: ApiBaseItemResponseModel<VehicleModel>) => {
        console.log("Loaded Vehicle Data");
        console.log(vehicleData);
        setVehicleItem(vehicleData);
      })
  }, [props.vehicleId])

  return (
    <div >
      <h1>FleetDetail:{props.vehicleId}</h1>      
      {vehicleItem.entity?.vehicleId}
      {vehicleItem.entity?.registration}
      {vehicleItem.entity?.colour}
      {vehicleItem.entity?.doors}
      {vehicleItem.entity?.make}
      {vehicleItem.entity?.model}
      {vehicleItem.entity?.transmission}
      {vehicleItem.entity?.mpg}
      {vehicleItem.entity?.mileage}

      <Button variant="contained" color="primary"  href={RouteConstants.FleetList}>Fleet List</Button>
    </div>
  );
}

export default FleetDetailComponent;