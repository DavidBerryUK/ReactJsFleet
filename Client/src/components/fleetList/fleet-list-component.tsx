import React, { useEffect }                          from 'react';
// import RepositoryVehicle from '../../repository/vehicle/RepositoryVehicle';
// import VehicleModel from '../../models/vehicle/VehicleModel';
// import ValidationMessage from '../../models/validation/ValidationMessage';

function  FleetListComponent() {

  useEffect(() => {
      console.log("Fleet List Component Rendered");
      // var repositoryVehicle = new RepositoryVehicle();
      // repositoryVehicle.getVehicleList()
      // .onSuccess((vehicleList:Array<VehicleModel>)=> {
      //   console.log(vehicleList);
      // })
      // .onValidationErrorsRaised((messages:Array<ValidationMessage>)=>{
      //   console.log("Validation Messages");
      //   console.log(messages);
      // })
      // .onFailed((error:string)=>{
      //   console.log("failed to get vehicle list")
      // })
    }
  );

  //
  // Template
  //
  return (
    <div >
        <h1>FleetListComponent</h1>
    </div>
  );

}

export default FleetListComponent;