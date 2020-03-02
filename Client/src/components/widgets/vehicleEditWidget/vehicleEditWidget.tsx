import { Box }                                  from '@material-ui/core';
import { Button }                               from '@material-ui/core';
import { Grid }                                 from '@material-ui/core';
import { IValidationContextActions }            from '../../../services/validation/context/interfaces/IValidationContextActions';
import { IValidationContextState }              from '../../../services/validation/context/interfaces/IValidationContextState';
import { IVehicleModel }                        from './IVehicleModel';
import { useHistory }                           from 'react-router';
import { useMemo }                              from 'react';
import { ValidationContext }                    from '../../../services/validation/context/context/ValidationContext';
import ApiBaseItemResponseModel                 from '../../../models/apiBase/ApiBaseItemResponseModel';
import ListItemModel                            from '../../../models/list/ListItemModel';
import React                                    from 'react';
import ReadOnlyTextControl                      from '../../controls/readOnlyTextControl/ReadOnlyTextControl';
import RepositoryVehicleItem                    from '../../../repository/vehicle/RepositoryVehicleItem';
import RouteConstants                           from '../../../routing/RouteConstants';
import TextSubHeaderControl                     from '../../controls/textSubHeaderControl/TextSubHeaderControl';
import UniqueColourSelectorWidget               from '../uniqueColourSelectorSelectorWidget/UniqueColourSelectorWidget';
import UniqueMakeSelectorWidget                 from '../uniqueMakeSelectorWidget/UniqueMakeSelectorWidget';
import UniqueModelSelectorWidget                from '../uniqueModelSelectorWidget/UniqueModelSelectorWidget';
import UniqueTransmissionSelectorWidget         from '../uniqueTransmissionSelectorWidget/UniqueTransmissionSelectorWidget';
import ValidationDebugInfoControl               from '../../../services/validation/controls/debugInfoControl/ValidationDebugInfoControl';
import ValidationState                          from '../../../services/validation/context/state/ValidationState';
import VehicleModel                             from '../../../models/vehicle/VehicleModel';
import WidgetContainerControl                   from '../../controls/widgetContainerControl/WidgetContainerControl';
import WidgetFooterControl                      from '../../controls/widgetFooterControl/WidgetFooterControl';
import ValidatedTextFieldControl from '../../../services/validation/controls/textFieldControl/ValidatedTextFieldControl';
import RuleMandatory from '../../../services/validation/rules/ruleProcessors/RuleMandatory';
import RuleMaxLength from '../../../services/validation/rules/ruleProcessors/RuleMaxLength';

interface IProperties {
  vehicleId: number;
}

const VehicleEditWidget: React.FC<IProperties> = (props) => {

  const [vehicleItem, setVehicleItem] = React.useState(new VehicleModel());
  var history = useHistory();

  useMemo(() => {
    var repositoryVehicle = new RepositoryVehicleItem();

    repositoryVehicle.getVehicleById(props.vehicleId)
      .onSuccess((vehicleData: ApiBaseItemResponseModel<VehicleModel>) => {
        setVehicleItem(vehicleData.entity!);
      })
  }, [props.vehicleId])

  function viewVehicleListClickedEventHandler() {
    history.push(RouteConstants.VehicleList);
  }

  function cancelClickedEventHandler() {
    history.push(RouteConstants.VehicleDetailView.replace(':id', vehicleItem.entityKey));
  }

  function saveClickedEventHandler() {

  }

  function onColourChangedHandler(item: ListItemModel) {

  }

  function onModelChangedHandler(item: ListItemModel) {

  }

  function onMakeChangedHandler(item: ListItemModel) {

  }

  function onTransmissionChangedHandler(item: ListItemModel) {

  }

  return (

    <ValidationState>
    <ValidationContext.Consumer>
        {(context: IValidationContextState & IValidationContextActions<IVehicleModel>) => (
            <>

    <WidgetContainerControl title="Edit Vehicle">
      <Grid container>
        <TextSubHeaderControl label="Vehicle" />
        <Grid container>
          <Grid item xs={3} >            
              <ValidatedTextFieldControl
                                              name="Registration"
                                            label="Registration"
                                            required
                                            autoComplete="off"
                                            autoFocus
                                            value={vehicleItem.registration}
                                            rules={[new RuleMandatory(), new RuleMaxLength(10)]}
                                        />

          </Grid>
        </Grid>
        <TextSubHeaderControl label="Make and Model" />
        <Grid container>
          <Grid item xs={3}>
            <Box pr={2}>
              [Make]
            <UniqueMakeSelectorWidget
                value={vehicleItem.make || ''}
                onSelectionChanged={(item: ListItemModel) => { onMakeChangedHandler(item) }} />
            </Box>
          </Grid>
          <Grid item xs={3} >
            <Box pr={2}>
              [model]
            <UniqueModelSelectorWidget
                value={vehicleItem.model || ''}
                onSelectionChanged={(item: ListItemModel) => { onModelChangedHandler(item) }} />
            </Box>
          </Grid>

        </Grid>
        <TextSubHeaderControl label="Specifications" />
        <Grid container>
          <Grid item xs={3} >
            <Box pr={2}>
              [colour]
            <UniqueColourSelectorWidget
                value={vehicleItem.colour || ''}
                onSelectionChanged={(item: ListItemModel) => { onColourChangedHandler(item) }} />
            </Box>
          </Grid>
          <Grid item xs={3} >            

<ValidatedTextFieldControl
                                              name="Doors"
                                            label="Doors"
                                            required
                                            autoComplete="off"
                                            value={vehicleItem.doors}
                                            rules={[new RuleMandatory(), new RuleMaxLength(1)]}
                                        />

          </Grid>
          <Grid item xs={3} >
            <Box pr={2}>
              [Transmission]
            <UniqueTransmissionSelectorWidget
                value={vehicleItem.transmission || ''}
                onSelectionChanged={(item: ListItemModel) => { onTransmissionChangedHandler(item) }} />
            </Box>
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

        <Box display="flex" width={1} >
          <Box display="flex" justifyContent="left" flex={1}>
            <Button variant="text" onClick={viewVehicleListClickedEventHandler} >Vehicle List</Button>
          </Box>
          <Box display="flex" justifyContent="right" >
            <Button variant="text" color="secondary" onClick={cancelClickedEventHandler}>Cancel</Button>
            <Button variant="text" color="primary" onClick={saveClickedEventHandler} disabled={!context.isFormValid}>Save</Button>
          </Box>
        </Box>

      </WidgetFooterControl>

    </WidgetContainerControl>
    <ValidationDebugInfoControl/>
    </>
                )}
            </ValidationContext.Consumer>

        </ValidationState>
  );

}

export default VehicleEditWidget;