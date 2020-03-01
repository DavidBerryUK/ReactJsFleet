import { Box }                                  from '@material-ui/core';
import { Grid }                                 from '@material-ui/core';
import { TextField }                            from '@material-ui/core';
import { useMemo }                              from 'react';
import ApiBaseItemResponseModel                 from '../../../models/apiBase/ApiBaseItemResponseModel';
import React                                    from 'react';
import RepositoryVehicleItem                    from '../../../repository/vehicle/RepositoryVehicleItem';
import VehicleModel                             from '../../../models/vehicle/VehicleModel';

interface IProperties {
  vehicleId: number;
}

const FleetDetailComponent: React.FC<IProperties> = (props) => {

  const [vehicleItem, setVehicleItem] = React.useState(new VehicleModel());

  useMemo(() => {
    var repositoryVehicle = new RepositoryVehicleItem();
    
    repositoryVehicle.getVehicleById(props.vehicleId)
      .onSuccess((vehicleData: ApiBaseItemResponseModel<VehicleModel>) => {        
        setVehicleItem(vehicleData.entity!);
      })
  }, [props.vehicleId])

  return (

    <Box p={4}>
      <Grid container >

        <Grid item xs={4} >
          <TextField
            label="Registration"
            value={vehicleItem.registration || ""}
            disabled />
        </Grid>

        <Grid item xs={4} >
          <TextField
            label="Make"
            value={vehicleItem.make || ""}
            disabled />
        </Grid>

        <Grid item xs={4} >
          <TextField
            label="Model"
            value={vehicleItem.model || ""}
            disabled />
        </Grid>
        
        <Grid item xs={4} >
          <TextField
            label="Colour"
            value={vehicleItem.colour || ""}
            disabled />
        </Grid>

        <Grid item xs={4} >
          <TextField
            label="Doors"
            value={vehicleItem.doors || ""}
            disabled />
        </Grid>
        
        <Grid item xs={4} >
          <TextField
            label="Transmission"
            value={vehicleItem.transmission || ""}
            disabled />
        </Grid>

        <Grid item xs={4} >
          <TextField
            label="MPG"
            value={vehicleItem.mpg || ""}
            disabled />
        </Grid>

        <Grid item xs={4} >
          <TextField
            label="Mileage"
            value={vehicleItem.mileage || ""}
            disabled />
        </Grid>

      </Grid>
    </Box>
  );
}

export default FleetDetailComponent;