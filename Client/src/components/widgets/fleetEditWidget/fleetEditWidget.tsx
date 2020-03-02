import { Box }                                  from '@material-ui/core';
import { Button }                               from '@material-ui/core';
import { Grid }                                 from '@material-ui/core';
import { useHistory }                           from 'react-router';
import { useMemo }                              from 'react';
import ApiBaseItemResponseModel                 from '../../../models/apiBase/ApiBaseItemResponseModel';
import React                                    from 'react';
import ReadOnlyTextControl                      from '../../controls/readOnlyTextControl/ReadOnlyTextControl';
import RepositoryVehicleItem                    from '../../../repository/vehicle/RepositoryVehicleItem';
import RouteConstants                           from '../../../routing/RouteConstants';
import TextSubHeaderControl                     from '../../controls/textSubHeaderControl/TextSubHeaderControl';
import VehicleModel                             from '../../../models/vehicle/VehicleModel';
import WidgetContainerControl                   from '../../controls/widgetContainerControl/WidgetContainerControl';
import WidgetFooterControl                      from '../../controls/widgetFooterControl/WidgetFooterControl';

interface IProperties {
  vehicleId: number;
}

const FleetEditWidget: React.FC<IProperties> = (props) => {

  const [vehicleItem, setVehicleItem] = React.useState(new VehicleModel());
  var history = useHistory();

  useMemo(() => {
    var repositoryVehicle = new RepositoryVehicleItem();

    repositoryVehicle.getVehicleById(props.vehicleId)
      .onSuccess((vehicleData: ApiBaseItemResponseModel<VehicleModel>) => {
        setVehicleItem(vehicleData.entity!);
      })
  }, [props.vehicleId])

  function viewFleetListClickedEventHandler() {
    history.push(RouteConstants.FleetList);
  }

  function editClickedEventHandler() {
    history.push(`/fleet/detail/${vehicleItem.vehicleId}/edit`);
  }

  return (

    <WidgetContainerControl title="Edit Vehicle">
      <Grid container>
        <TextSubHeaderControl label="Vehicle" />
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
        <TextSubHeaderControl label="Specifications" />
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
        <TextSubHeaderControl label="Fuel" />
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

      <WidgetFooterControl>

        <Box display="flex" justifyContent="flex-end">
          <Box>
            <Button variant="text" onClick={viewFleetListClickedEventHandler} >Fleet List</Button>
            <Button variant="text" onClick={editClickedEventHandler} >Edit</Button>
          </Box>
        </Box>
      </WidgetFooterControl>

    </WidgetContainerControl>
  );

}

export default FleetViewWidget;