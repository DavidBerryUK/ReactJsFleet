import { Box }                                  from '@material-ui/core';
import { Grid }                                 from '@material-ui/core';
import { Paper }                                from '@material-ui/core';
import { useMemo }                              from 'react';
import ApiBaseItemResponseModel                 from '../../../models/apiBase/ApiBaseItemResponseModel';
import React                                    from 'react';
import ReadOnlyTextControl                      from '../../controls/readOnlyTextControl/ReadOnlyTextControl';
import RepositoryVehicleItem                    from '../../../repository/vehicle/RepositoryVehicleItem';
import TextSubHeaderControl                     from '../../controls/textSubHeaderControl/TextSubHeaderControl';
import VehicleModel                             from '../../../models/vehicle/VehicleModel';

interface IProperties {
  vehicleId: number;
}

const FleetDetailWidget: React.FC<IProperties> = (props) => {

  const [vehicleItem, setVehicleItem] = React.useState(new VehicleModel());

  useMemo(() => {
    var repositoryVehicle = new RepositoryVehicleItem();

    repositoryVehicle.getVehicleById(props.vehicleId)
      .onSuccess((vehicleData: ApiBaseItemResponseModel<VehicleModel>) => {
        setVehicleItem(vehicleData.entity!);
      })
  }, [props.vehicleId])

  return (

    <Box p={1}>
      <Paper>
        <Box p={2}>
      <Grid container>
        <TextSubHeaderControl label="Vehicle"/>
        <Grid container>
          <Grid item xs={3} >
            <ReadOnlyTextControl
              label="Registration"
              value={vehicleItem.registration}
              maxWidth={150} />
          </Grid>
        </Grid>
        <TextSubHeaderControl label="Make and Model" />
        <Grid container>
          <Grid item xs={3} >
            <ReadOnlyTextControl
              label="Make"
              value={vehicleItem.make}
              maxWidth={150} />
          </Grid>
          <Grid item xs={3} >
            <ReadOnlyTextControl
              label="Model"
              value={vehicleItem.model}
              maxWidth={150} />
          </Grid>
        </Grid>
        <TextSubHeaderControl label="Specifications"/>
        <Grid container>
          <Grid item xs={3} >
            <ReadOnlyTextControl
              label="Colour"
              value={vehicleItem.colour}
              maxWidth={150} />
          </Grid>
          <Grid item xs={3} >
            <ReadOnlyTextControl
              label="Doors"
              value={vehicleItem.doors}
              maxWidth={150} />
          </Grid>
          <Grid item xs={3} >
            <ReadOnlyTextControl
              label="Transmission"
              value={vehicleItem.transmission}
              maxWidth={150} />
          </Grid>
        </Grid>
        <TextSubHeaderControl label="Fuel"/>
        <Grid container>
          <Grid item xs={3} >
            <ReadOnlyTextControl
              label="MPG"
              value={vehicleItem.mpg}
              maxWidth={150} />
          </Grid>
          <Grid item xs={3} >
            <ReadOnlyTextControl
              label="Mileage"
              value={vehicleItem.mileage}
              maxWidth={150} />
          </Grid>
        </Grid>
      </Grid>
      </Box>
      </Paper>
    </Box>
  );
}

export default FleetDetailWidget;