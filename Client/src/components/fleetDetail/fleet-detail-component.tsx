import React, { useMemo } from 'react';
import RepositoryVehicleItem from '../../repository/vehicle/RepositoryVehicleItem';
import ApiBaseItemResponseModel from '../../models/apiBase/ApiBaseItemResponseModel';
import VehicleModel from '../../models/vehicle/VehicleModel';

interface IProperties {
  vehicleId: number;
}

const FleetDetailComponent: React.FC<IProperties> = (props) => {

  useMemo(() => {
    var repositoryVehicle = new RepositoryVehicleItem();
    repositoryVehicle.getVehicleById(props.vehicleId)
      .onSuccess((vehicleData: ApiBaseItemResponseModel<VehicleModel>) => {
        console.log("Loaded Vehicle Data");
        console.log(vehicleData);
      })
  }, [props.vehicleId])

  return (
    <div >
      <h1>FleetDetail:{props.vehicleId}</h1>
    </div>
  );
}

export default FleetDetailComponent;