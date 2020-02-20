import { Box }                                  from '@material-ui/core';
import { enumColumnNames }                      from './fleetListFilterModel'
import { enumSortDirection }                    from './fleetListFilterModel'
import { makeStyles }                           from '@material-ui/core';
import { Paper }                                from '@material-ui/core';
import { Table }                                from '@material-ui/core';
import { TableBody }                            from '@material-ui/core';
import { TableCell }                            from '@material-ui/core';
import { TableHead }                            from '@material-ui/core';
import { TableRow }                             from '@material-ui/core';
import { TableSortLabel }                       from '@material-ui/core';
import { useMemo }                              from 'react';
import ApiBaseCollectionResponseModel           from '../../models/apiBase/ApiBaseCollectionResponseModel';
import FleetListFilterModel                     from './fleetListFilterModel'
import ListItemModel                            from '../../models/list/ListItemModel';
import PaginationButtons                        from "../../components/pagination/pagination-buttons-component";
import React                                    from 'react';
import RegistrationSearchBoxComponent from '../registrationSearchBox/RegistrationSearchBoxComponent';
import RepositoryVehicle                        from '../../repository/vehicle/RepositoryVehicle';
import RowsPerPageComponent                     from '../rowsPerPage/RowsPerPageComponent';
import UniqueColourSelectorComponent            from '../uniqueColourSelectorSelector/UniqueColourSelectorComponent';
import UniqueDoorsSelectorComponent             from '../uniqueDoorsSelectorSelector/UniqueDoorsSelectorComponent';
import UniqueMakeSelectorComponent              from '../uniqueMakeSelector/UniqueMakeSelectorComponent';
import UniqueModelSelectorComponent             from '../uniqueModelSelector/UniqueModelSelectorComponent';
import UniqueTransmissionSelectorComponent      from '../uniqueTransmissionSelector/UniqueTransmissionSelectorComponent';
import VehicleModel                             from '../../models/vehicle/VehicleModel';

function FleetListComponent() {

  const useStyles = makeStyles({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  });

  const classes = useStyles();
  const [listFilter, setListFilter] = React.useState(new FleetListFilterModel());
  const [vehicleList, setVehicleList] = React.useState(new ApiBaseCollectionResponseModel<VehicleModel>());

  //
  // Handles page refreshing, this is only executed when the object 
  // 'listFilter' is updated
  //
  useMemo(() => {
    var repositoryVehicle = new RepositoryVehicle();
    repositoryVehicle.getVehicleList(listFilter)
      .onSuccess((vehicleListData: ApiBaseCollectionResponseModel<VehicleModel>) => {
        setVehicleList(vehicleListData);
      });

  }, [listFilter]);

  //
  // handler for the pagination control
  //
  function onPageChangedHandler(page: number): void {
    var filter = listFilter.clone();
    filter.pageNumber = page;
    setListFilter(filter);
  }

  //
  // Handle column header clicks for sorting
  //
  function columnHeaderSortClickHandler(column: enumColumnNames) {
    var filter = listFilter.clone();
    if (column === listFilter.sortedColumn) {
      if (listFilter.sortDirection === enumSortDirection.asc) {
        filter.sortDirection = enumSortDirection.desc;
      } else {
        filter.sortDirection = enumSortDirection.asc;
      }
    } else {
      filter.sortedColumn = column;
      filter.sortDirection = enumSortDirection.asc;
    }
    setListFilter(filter);
  }

  // Filter Handler - Registration
  //
  function filterRegistrationChangeHandler(searchText : string) {
    var filter = listFilter.clone();
    filter.filterRegistration = searchText;
    setListFilter(filter);
  }

  // Filter Handler - Colour
  //
  function filterColourChangeHandler(item : ListItemModel) {
    var filter = listFilter.clone();
    filter.filterColour = item;
    setListFilter(filter);
  }

  // Filter Handler - Make
  //
  function filterMakeChangeHandler(item : ListItemModel) {
    var filter = listFilter.clone();
    filter.filterMake = item;
    setListFilter(filter);
  }

  // Filter Handler - Model
  //
  function filterModelChangeHandler(item : ListItemModel) {
    var filter = listFilter.clone();
    filter.filterModel = item;
    setListFilter(filter);
  }

  // Filter Handler - Transmission
  //
  function filterTransmissionChangeHandler(item : ListItemModel) {
    var filter = listFilter.clone();
    filter.filterTransmission = item;
    setListFilter(filter);
  }

  // Filter Handler - Number of doors
  //
  function filterDoorsChangeHandler(item : ListItemModel) {
    var filter = listFilter.clone();
    filter.filterDoors = item;
    setListFilter(filter);
  }

  // Rows Per Page Changed
  //
  function rowsPerPageChangeHandler(rowsPerPage : number) {
    var filter = listFilter.clone();
    filter.rowsPerPage = rowsPerPage;
    setListFilter(filter);
  }

  

  //
  // Template for table
  //
  return (
    <Paper className={classes.root}>
      <Table className={classes.table} stickyHeader size="small"  >
        <TableHead>
          <TableRow>

            <TableCell>
              <TableSortLabel
                active={listFilter.sortedColumn === enumColumnNames.registration}
                direction={listFilter.sortDirection}
                onClick={() => { columnHeaderSortClickHandler(enumColumnNames.registration) }}>
              </TableSortLabel>
              Registration
              <RegistrationSearchBoxComponent onSelectionChanged={(searchText: string)=>{ filterRegistrationChangeHandler(searchText)}} />
            </TableCell>

            <TableCell>
              <TableSortLabel
                active={listFilter.sortedColumn === enumColumnNames.make}
                direction={listFilter.sortDirection}
                onClick={() => { columnHeaderSortClickHandler(enumColumnNames.make) }}>
              </TableSortLabel>
              Make
              <UniqueMakeSelectorComponent onSelectionChanged={(item: ListItemModel)=>{ filterMakeChangeHandler(item)}} />
            </TableCell>

            <TableCell>
              <TableSortLabel
                active={listFilter.sortedColumn === enumColumnNames.model}
                direction={listFilter.sortDirection}
                onClick={() => { columnHeaderSortClickHandler(enumColumnNames.model) }}>
              </TableSortLabel>
              Model
              <UniqueModelSelectorComponent onSelectionChanged={(item: ListItemModel)=>{ filterModelChangeHandler(item)}} />
            </TableCell>

            <TableCell>
              <TableSortLabel
                active={listFilter.sortedColumn === enumColumnNames.colour}
                direction={listFilter.sortDirection}
                onClick={() => { columnHeaderSortClickHandler(enumColumnNames.colour) }}>
              </TableSortLabel>
              Colour
              <UniqueColourSelectorComponent onSelectionChanged={(item: ListItemModel)=>{ filterColourChangeHandler(item)}} />
            </TableCell>
            
            <TableCell>
              <TableSortLabel
                active={listFilter.sortedColumn === enumColumnNames.Transmission}
                direction={listFilter.sortDirection}
                onClick={() => { columnHeaderSortClickHandler(enumColumnNames.Transmission) }}>
              </TableSortLabel>
              Transmission
              <UniqueTransmissionSelectorComponent  onSelectionChanged={(item: ListItemModel)=>{ filterTransmissionChangeHandler(item)}} />
            </TableCell>
                        
            <TableCell align="right">
              <TableSortLabel
                active={listFilter.sortedColumn === enumColumnNames.doors}
                direction={listFilter.sortDirection}
                onClick={() => { columnHeaderSortClickHandler(enumColumnNames.doors) }}>
              </TableSortLabel>
              Doors
              <UniqueDoorsSelectorComponent  onSelectionChanged={(item: ListItemModel)=>{ filterDoorsChangeHandler(item)}} />
            </TableCell>

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
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Box display="flex" justifyContent="left" >
        <Box p={2}>rows {vehicleList.totalRows}</Box>
            <Box display="flex" flexGrow={1} justifyContent="center">
              <Box display="flex" pt={2} >
                  <PaginationButtons page={listFilter.pageNumber} pageCount={vehicleList.totalPages} onPageChanged={(page: number) => { onPageChangedHandler(page) }} />
              </Box>
            </Box>
            <Box p={2}>
            <RowsPerPageComponent onRowsPerPageChanged={(rowsPerPage: number)=> {rowsPerPageChangeHandler(rowsPerPage)}}/>
            </Box>
      </Box>      
      
    </Paper>
  );
}

export default FleetListComponent;