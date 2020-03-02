import { Box }                                  from '@material-ui/core';
import { Button }                               from '@material-ui/core';
import { EnumAction }                           from '../../../services/applicationContext/ApplicationContext';
import { enumColumnNames }                      from './fleetListFilterModel'
import { enumSortDirection }                    from './fleetListFilterModel'
import { Link }                                 from 'react-router-dom';
import { makeStyles }                           from '@material-ui/core';
import { Paper }                                from '@material-ui/core';
import { Table }                                from '@material-ui/core';
import { TableBody }                            from '@material-ui/core';
import { TableCell }                            from '@material-ui/core';
import { TableHead }                            from '@material-ui/core';
import { TableRow }                             from '@material-ui/core';
import { TableSortLabel }                       from '@material-ui/core';
import { useContext }                           from 'react';
import { useMemo }                              from 'react';
import ApiBaseCollectionResponseModel           from '../../../models/apiBase/ApiBaseCollectionResponseModel';
import ApplicationContext                       from '../../../services/applicationContext/ApplicationContext';
import debounceUtility                          from '../../../utilities/debounceUtility';
import ListItemModel                            from '../../../models/list/ListItemModel';
import PaginationButtonsControl                 from "../../controls/paginationControl/paginationButtonsControl";
import React                                    from 'react';
import RegistrationSearchBoxWidget              from '../vehicleRegistrationSearchBoxWidget/RegistrationSearchBoxWidget';
import RepositoryVehicleList                    from '../../../repository/vehicle/RepositoryVehicleList';
import RouteConstants                           from '../../../routing/RouteConstants';
import RowsPerPageControl                       from '../../controls/rowsPerPageControl/RowsPerPageControl';
import UniqueColourSelectorWidget               from '../uniqueColourSelectorSelectorWidget/UniqueColourSelectorWidget';
import UniqueDoorsSelectorWidget                from '../uniqueDoorsSelectorSelectorWidget/UniqueDoorsSelectorWidget';
import UniqueMakeSelectorWidget                 from '../uniqueMakeSelectorWidget/UniqueMakeSelectorWidget';
import UniqueModelSelectorWidget                from '../uniqueModelSelectorWidget/UniqueModelSelectorWidget';
import UniqueTransmissionSelectorWidget         from '../uniqueTransmissionSelectorWidget/UniqueTransmissionSelectorWidget';
import VehicleModel                             from '../../../models/vehicle/VehicleModel';


const FleetListWidget: React.FC = () => {

  const useStyles = makeStyles({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  });

  const { state, dispatch } = useContext(ApplicationContext);

  const classes = useStyles();
  const [vehicleList, setVehicleList] = React.useState(new ApiBaseCollectionResponseModel<VehicleModel>());

  //
  // Handles page refreshing, this is only executed when the object 
  // 'listFilter' is updated
  //
  useMemo(() => {
    var repositoryVehicle = new RepositoryVehicleList();
    repositoryVehicle.getVehicleList(state.fleetListFilter)
      .onSuccess((vehicleListData: ApiBaseCollectionResponseModel<VehicleModel>) => {
        setVehicleList(vehicleListData);
      });

  }, [state.fleetListFilter]);

  //
  // handler for the pagination control
  //
  function onPageChangedHandler(page: number): void {
    var filter = state.fleetListFilter.clone();
    filter.pageNumber = page;
    dispatch({ type: EnumAction.UpdateFleetListFilter, value: filter });

  }

  //
  // Handle column header clicks for sorting
  //
  function columnHeaderSortClickHandler(column: enumColumnNames) {
    var filter = state.fleetListFilter.clone();
    if (column === state.fleetListFilter.sortedColumn) {
      if (state.fleetListFilter.sortDirection === enumSortDirection.asc) {
        filter.sortDirection = enumSortDirection.desc;
      } else {
        filter.sortDirection = enumSortDirection.asc;
      }
    } else {
      filter.sortedColumn = column;
      filter.sortDirection = enumSortDirection.asc;
    }
    dispatch({ type: EnumAction.UpdateFleetListFilter, value: filter });
  }

  // Filter Handler - Registration
  //
  function filterRegistrationChangeHandler(searchText: string) {
    debounceUtility.debounceStringCallback(searchText, 500, (value: string) => {
      var filter = state.fleetListFilter.clone();
      filter.filterRegistration = value;
      dispatch({ type: EnumAction.UpdateFleetListFilter, value: filter });
    });
  }

  // Filter Handler - Colour
  //
  function filterColourChangeHandler(item: ListItemModel) {
    var filter = state.fleetListFilter.clone();
    filter.filterColour = item;
    dispatch({ type: EnumAction.UpdateFleetListFilter, value: filter });
  }

  // Filter Handler - Make
  //
  function filterMakeChangeHandler(item: ListItemModel) {
    var filter = state.fleetListFilter.clone();
    filter.filterMake = item;
    dispatch({ type: EnumAction.UpdateFleetListFilter, value: filter });
  }

  // Filter Handler - Model
  //
  function filterModelChangeHandler(item: ListItemModel) {
    var filter = state.fleetListFilter.clone();
    filter.filterModel = item;
    dispatch({ type: EnumAction.UpdateFleetListFilter, value: filter });
  }

  // Filter Handler - Transmission
  //
  function filterTransmissionChangeHandler(item: ListItemModel) {
    var filter = state.fleetListFilter.clone();
    filter.filterTransmission = item;
    dispatch({ type: EnumAction.UpdateFleetListFilter, value: filter });
  }

  // Filter Handler - Number of doors
  //
  function filterDoorsChangeHandler(item: ListItemModel) {
    var filter = state.fleetListFilter.clone();
    filter.filterDoors = item;
    dispatch({ type: EnumAction.UpdateFleetListFilter, value: filter });
  }

  // Rows Per Page Changed
  //
  function rowsPerPageChangeHandler(rowsPerPage: number) {
    var filter = state.fleetListFilter.clone();
    filter.rowsPerPage = rowsPerPage;
    dispatch({ type: EnumAction.UpdateFleetListFilter, value: filter });
  }

  //
  // Template for table
  //
  return (
    <Box p={1}>
    <Paper>
      <Box p={2}>
      <Table className={classes.table} stickyHeader size="small"  >
        <TableHead>
          <TableRow>

            <TableCell>
              <TableSortLabel
                active={state.fleetListFilter.sortedColumn === enumColumnNames.registration}
                direction={state.fleetListFilter.sortDirection}
                onClick={() => { columnHeaderSortClickHandler(enumColumnNames.registration) }}>
              </TableSortLabel>
              Registration
              <RegistrationSearchBoxWidget onSelectionChanged={(searchText: string) => { filterRegistrationChangeHandler(searchText) }} />
            </TableCell>

            <TableCell>
              <TableSortLabel
                active={state.fleetListFilter.sortedColumn === enumColumnNames.make}
                direction={state.fleetListFilter.sortDirection}
                onClick={() => { columnHeaderSortClickHandler(enumColumnNames.make) }}>
              </TableSortLabel>
              Make
              <UniqueMakeSelectorWidget
                value={state.fleetListFilter.filterMake.entityValue}
                onSelectionChanged={(item: ListItemModel) => { filterMakeChangeHandler(item) }} />
            </TableCell>

            <TableCell>
              <TableSortLabel
                active={state.fleetListFilter.sortedColumn === enumColumnNames.model}
                direction={state.fleetListFilter.sortDirection}
                onClick={() => { columnHeaderSortClickHandler(enumColumnNames.model) }}>
              </TableSortLabel>
              Model
              <UniqueModelSelectorWidget
                value={state.fleetListFilter.filterModel.entityValue}
                onSelectionChanged={(item: ListItemModel) => { filterModelChangeHandler(item) }} />
            </TableCell>

            <TableCell>
              <TableSortLabel
                active={state.fleetListFilter.sortedColumn === enumColumnNames.colour}
                direction={state.fleetListFilter.sortDirection}
                onClick={() => { columnHeaderSortClickHandler(enumColumnNames.colour) }}>
              </TableSortLabel>
              Colour
              <UniqueColourSelectorWidget
                value={state.fleetListFilter.filterColour.entityValue}
                onSelectionChanged={(item: ListItemModel) => { filterColourChangeHandler(item) }} />
            </TableCell>

            <TableCell>
              <TableSortLabel
                active={state.fleetListFilter.sortedColumn === enumColumnNames.Transmission}
                direction={state.fleetListFilter.sortDirection}
                onClick={() => { columnHeaderSortClickHandler(enumColumnNames.Transmission) }}>
              </TableSortLabel>
              Transmission
              <UniqueTransmissionSelectorWidget
                value={state.fleetListFilter.filterTransmission.entityValue}
                onSelectionChanged={(item: ListItemModel) => { filterTransmissionChangeHandler(item) }} />
            </TableCell>

            <TableCell align="right">
              <TableSortLabel
                active={state.fleetListFilter.sortedColumn === enumColumnNames.doors}
                direction={state.fleetListFilter.sortDirection}
                onClick={() => { columnHeaderSortClickHandler(enumColumnNames.doors) }}>
              </TableSortLabel>
              Doors
              <UniqueDoorsSelectorWidget
                value={state.fleetListFilter.filterDoors.entityValue}
                onSelectionChanged={(item: ListItemModel) => { filterDoorsChangeHandler(item) }} />
            </TableCell>

            <TableCell></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {vehicleList.entities?.map(row => (
            <TableRow key={row.entityKey} hover>
              <TableCell component="th" scope="row">
                {row.registration}
              </TableCell>
              <TableCell>{row.make}</TableCell>
              <TableCell>{row.model}</TableCell>
              <TableCell>{row.colour}</TableCell>
              <TableCell>{row.transmission}</TableCell>
              <TableCell align="right">{row.doors}</TableCell>
              <TableCell>
                <Link to={`${RouteConstants.FleetDetail}/${row.entityKey}`}>
                  <Button color="primary"
                    variant="contained"
                    size="small">view</Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Box display="flex" justifyContent="left" >
        <Box p={2}>rows {vehicleList.totalRows}</Box>
        <Box display="flex" flexGrow={1} justifyContent="center">
          <Box display="flex" pt={2} >
            <PaginationButtonsControl page={state.fleetListFilter.pageNumber} pageCount={vehicleList.totalPages} onPageChanged={(page: number) => { onPageChangedHandler(page) }} />
          </Box>
        </Box>
        <Box p={2}>
          <RowsPerPageControl onRowsPerPageChanged={(rowsPerPage: number) => { rowsPerPageChangeHandler(rowsPerPage) }} />
        </Box>
      </Box>
    </Box>
    </Paper>
    </Box>
  );
}

export default FleetListWidget;