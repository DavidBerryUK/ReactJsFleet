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
import RepositoryVehicle                        from '../../repository/vehicle/RepositoryVehicle';
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
  const [vehicleList, setVehicleList] = React.useState(new Array<VehicleModel>());

  //
  // Handles page refreshing, this is only executed when the object 
  // 'listFilter' is updated
  //
  useMemo(() => {
    var repositoryVehicle = new RepositoryVehicle();
    repositoryVehicle.getVehicleList(listFilter.pageNumber,
      listFilter.rowsPerPage,
      listFilter.sortedColumn,
      listFilter.sortDirection,
      listFilter.filterColour.entityValue)
      .onSuccess((vehicleListData: ApiBaseCollectionResponseModel<VehicleModel>) => {
        setVehicleList(vehicleListData.entities!);
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

  function filterColourChangeHandler(item : ListItemModel) {
    var filter = listFilter.clone();
    filter.filterColour = item;
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
              </TableCell>
            <TableCell>
              <TableSortLabel
                active={listFilter.sortedColumn === enumColumnNames.make}
                direction={listFilter.sortDirection}
                onClick={() => { columnHeaderSortClickHandler(enumColumnNames.make) }}>
              </TableSortLabel>
              Make
              <UniqueMakeSelectorComponent />
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={listFilter.sortedColumn === enumColumnNames.model}
                direction={listFilter.sortDirection}
                onClick={() => { columnHeaderSortClickHandler(enumColumnNames.model) }}>
              </TableSortLabel>
              Model
              <UniqueModelSelectorComponent />
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
              <UniqueTransmissionSelectorComponent />
            </TableCell>
            <TableCell align="right">
              <TableSortLabel
                active={listFilter.sortedColumn === enumColumnNames.doors}
                direction={listFilter.sortDirection}
                onClick={() => { columnHeaderSortClickHandler(enumColumnNames.doors) }}>
              </TableSortLabel>
              Doors
              <UniqueDoorsSelectorComponent />
            </TableCell>
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
              <TableCell>{row.colour}</TableCell>
              <TableCell>{row.transmission}</TableCell>
              <TableCell align="right">{row.doors}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <PaginationButtons page={listFilter.pageNumber} pageCount={20} onPageChanged={(page: number) => { onPageChangedHandler(page) }} />
    </Paper>
  );
}

export default FleetListComponent;