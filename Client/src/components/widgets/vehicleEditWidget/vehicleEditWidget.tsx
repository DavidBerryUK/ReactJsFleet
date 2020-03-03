import { Box }                                  from '@material-ui/core';
import { Button }                               from '@material-ui/core';
import { Grid }                                 from '@material-ui/core';
import { IValidationContextActions }            from '../../../services/validation/context/interfaces/IValidationContextActions';
import { IValidationContextState }              from '../../../services/validation/context/interfaces/IValidationContextState';
import { IVehicleModel }                        from './IVehicleModel';
import { useHistory }                           from 'react-router';
import { useMemo }                              from 'react';
import { ValidationContext }                    from '../../../services/validation/context/context/ValidationContext';
import ApiBaseCollectionResponseModel           from '../../../models/apiBase/ApiBaseCollectionResponseModel';
import ApiBaseItemResponseModel                 from '../../../models/apiBase/ApiBaseItemResponseModel';
import ListItemModel                            from '../../../models/list/ListItemModel';
import React                                    from 'react';
import ReadOnlyTextControl                      from '../../controls/readOnlyTextControl/ReadOnlyTextControl';
import RepositorySpecification                  from '../../../repository/specification/RepositorySpecification';
import RepositoryVehicleItem                    from '../../../repository/vehicle/RepositoryVehicleItem';
import RouteConstants                           from '../../../routing/RouteConstants';
import RuleMandatory                            from '../../../services/validation/rules/ruleProcessors/RuleMandatory';
import RuleMaxLength                            from '../../../services/validation/rules/ruleProcessors/RuleMaxLength';
import TextSubHeaderControl                     from '../../controls/textSubHeaderControl/TextSubHeaderControl';
import ValidatedSelectFieldControl              from '../../../services/validation/controls/selectFieldControl/ValidatedSelectFieldControl';
import ValidatedTextFieldControl                from '../../../services/validation/controls/textFieldControl/ValidatedTextFieldControl';
import ValidationDebugInfoControl               from '../../../services/validation/controls/debugInfoControl/ValidationDebugInfoControl';
import ValidationState                          from '../../../services/validation/context/state/ValidationState';
import VehicleModel                             from '../../../models/vehicle/VehicleModel';
import WidgetContainerControl                   from '../../controls/widgetContainerControl/WidgetContainerControl';
import WidgetFooterControl                      from '../../controls/widgetFooterControl/WidgetFooterControl';

interface IProperties {
  vehicleId: number;
}

const VehicleEditWidget: React.FC<IProperties> = (props) => { 

  const [colourList, setColourList] = React.useState<Array<ListItemModel>>(new Array<ListItemModel>());
  const [makesList, setMakesList] = React.useState<Array<ListItemModel>>(new Array<ListItemModel>());
  const [modelList, setModelList] = React.useState<Array<ListItemModel>>(new Array<ListItemModel>());
  const [transmissionList, setTransmissionList] = React.useState<Array<ListItemModel>>(new Array<ListItemModel>());
  const [vehicleItem, setVehicleItem] = React.useState(new VehicleModel());
  var history = useHistory();

  useMemo(() => {
    var repositorySpecification = new RepositorySpecification()

    repositorySpecification.getUniqueMakes()
      .onSuccess((data: ApiBaseCollectionResponseModel<ListItemModel>) => {
        setMakesList(data.entities || new Array<ListItemModel>());
      });

    repositorySpecification.getUniqueModels()
      .onSuccess((data: ApiBaseCollectionResponseModel<ListItemModel>) => {
        setModelList(data.entities || new Array<ListItemModel>());
      });

    repositorySpecification.getUniqueColours()
      .onSuccess((data: ApiBaseCollectionResponseModel<ListItemModel>) => {
        setColourList(data.entities || new Array<ListItemModel>());
      });

    repositorySpecification.getUniqueTransmission()
      .onSuccess((data: ApiBaseCollectionResponseModel<ListItemModel>) => {
        setTransmissionList(data.entities || new Array<ListItemModel>());
      });

  }, [])

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

                      <ValidatedSelectFieldControl
                        name="Make"
                        label="Make"
                        items={makesList}
                        value={vehicleItem.make}
                        rules={[new RuleMandatory()]} />

                    </Box>
                  </Grid>
                  <Grid item xs={3} >
                    <Box pr={2}>
                      <ValidatedSelectFieldControl
                        name="Model"
                        label="Model"
                        items={modelList}
                        value={vehicleItem.model}
                        rules={[new RuleMandatory()]} />
                    </Box>
                  </Grid>

                </Grid>
                <TextSubHeaderControl label="Specifications" />
                <Grid container>
                  <Grid item xs={3} >
                    <Box pr={2}>
                      <ValidatedSelectFieldControl
                        name="Colour"
                        label="Colour"
                        items={colourList}
                        value={vehicleItem.colour}
                        rules={[new RuleMandatory()]} />
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
                      <ValidatedSelectFieldControl
                        name="Transmission"
                        label="Transmission"
                        items={transmissionList}
                        value={vehicleItem.transmission}
                        rules={[new RuleMandatory()]} />
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
            <ValidationDebugInfoControl />
          </>
        )}
      </ValidationContext.Consumer>

    </ValidationState>
  );
}

export default VehicleEditWidget;