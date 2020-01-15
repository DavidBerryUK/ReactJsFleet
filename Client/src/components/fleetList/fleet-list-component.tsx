import { enumColumnNames }                    from './fleetListFilterModel'
import { enumSortDirection }                  from './fleetListFilterModel'
import { makeStyles }                         from '@material-ui/core';
import { Paper }                              from '@material-ui/core';
import { Table }                              from '@material-ui/core';
import { TableBody }                          from '@material-ui/core';
import { TableCell}                           from '@material-ui/core';
import { TableHead }                          from '@material-ui/core';
import { TableRow }                           from '@material-ui/core';
import { TableSortLabel }                     from '@material-ui/core';
import { useEffect }                          from 'react';
import FleetListFilterModel                   from './fleetListFilterModel'
import React                                  from 'react';
import RepositoryVehicle                      from '../../repository/vehicle/RepositoryVehicle';
import VehicleModel                           from '../../models/vehicle/VehicleModel';
import ApiBaseCollectionResponseModel from '../../models/apiBase/ApiBaseCollectionResponseModel';

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
  const [vehicleList, setVehicleList] = React.useState(new Array<VehicleModel>());

  //
  // The effect runs when the page is updated, however the array
  // provides a 'filter list', to ensure that the routine will only be 
  // run if the state changes for these filtered items
  useEffect(() => {
    getData();

    function getData() {
      var repositoryVehicle = new RepositoryVehicle();
      repositoryVehicle.getVehicleList(listFilter.pageNumber, 
                                      listFilter.rowsPerPage,
                                      listFilter.sortedColumn,
                                      listFilter.sortDirection)
        .onSuccess((vehicleListData: ApiBaseCollectionResponseModel<VehicleModel>) => {
          console.log('got data');
          setVehicleList(vehicleListData.entities!);
        });
    }

  }, [listFilter]);

  //
  // Get the fleet list
  //


  //
  // Handle column header clicks
  //
  function handleColumnHeaderSortClicked(column: enumColumnNames) {
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

  //
  // Template
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
                onClick={() => { handleColumnHeaderSortClicked(enumColumnNames.registration) }} ></TableSortLabel>
              Registration
              </TableCell>
            <TableCell>
              <TableSortLabel 
                active={listFilter.sortedColumn === enumColumnNames.make}
                direction={listFilter.sortDirection}
                onClick={() => { handleColumnHeaderSortClicked(enumColumnNames.make) }}></TableSortLabel>
              Make</TableCell>
            <TableCell>
              <TableSortLabel 
                active={listFilter.sortedColumn === enumColumnNames.model}
                direction={listFilter.sortDirection}
                onClick={() => { handleColumnHeaderSortClicked(enumColumnNames.model) }}></TableSortLabel>
              Model</TableCell>
            <TableCell>
              <TableSortLabel 
                active={listFilter.sortedColumn === enumColumnNames.Transmission}
                direction={listFilter.sortDirection}
                onClick={() => { handleColumnHeaderSortClicked(enumColumnNames.Transmission) }}></TableSortLabel>
              Transmission</TableCell>
            <TableCell align="right">
              <TableSortLabel 
                active={listFilter.sortedColumn === enumColumnNames.doors}
                direction={listFilter.sortDirection}
                onClick={() => { handleColumnHeaderSortClicked(enumColumnNames.doors) }} ></TableSortLabel>
              Doors</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vehicleList.map(row => (
            <TableRow key={row.entityKey} hover>
              <TableCell component="th" scope="row">
                {row.registration}
              </TableCell>
              <TableCell>{row.make}</TableCell>
              <TableCell>{row.model}</TableCell>
              <TableCell>{row.transmission}</TableCell>
              <TableCell align="right">{row.doors}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default FleetListComponent;