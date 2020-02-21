import React                          from 'react';

interface IProperties {
  vehicleId : number;
}

const FleetDetailComponent: React.FC<IProperties> = ( props) => {
  return (
    <div >
        <h1>FleetDetail:{props.vehicleId}</h1>
    </div>
  );
}

export default FleetDetailComponent;