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
import { useMemo }                            from 'react';
import ApiBaseCollectionResponseModel         from '../../models/apiBase/ApiBaseCollectionResponseModel';
import FleetListFilterModel                   from './fleetListFilterModel'
import PaginationButtons                      from "../../components/pagination/pagination-buttons-component";
import React                                  from 'react';
import RepositoryVehicle                      from '../../repository/vehicle/RepositoryVehicle';
import VehicleModel                           from '../../models/vehicle/VehicleModel';

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

  useMemo(() => {

    var repositoryVehicle = new RepositoryVehicle();
    repositoryVehicle.getVehicleList(listFilter.pageNumber,
      listFilter.rowsPerPage,
      listFilter.sortedColumn,
      listFilter.sortDirection)
      .onSuccess((vehicleListData: ApiBaseCollectionResponseModel<VehicleModel>) => {
        setVehicleList(vehicleListData.entities!);
      });

  }, [listFilter]);

  function onPageChanged(page: number) : void {
    console.log("FLEET LIST COMPONENT - on page changed");
    console.log(page);
    var filter = listFilter.clone();
    filter.pageNumber = page;
    setListFilter(filter);
  }

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
      <PaginationButtons page={listFilter.pageNumber} pageCount={20} onPageChanged={(page:number) => { onPageChanged(page) }}  />
    </Paper>
  );
}

export default FleetListComponent;