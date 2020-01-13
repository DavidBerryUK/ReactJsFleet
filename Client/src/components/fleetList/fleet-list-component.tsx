import { makeStyles }                         from '@material-ui/core';
import { Paper }                              from '@material-ui/core';
import { Table }                              from '@material-ui/core';
import { TableBody }                          from '@material-ui/core';
import { TableCell}                           from '@material-ui/core';
import { TableHead }                          from '@material-ui/core';
import { TableRow }                           from '@material-ui/core';
import { useEffect }                          from 'react';
import React                                  from 'react';
import RepositoryVehicle                      from '../../repository/vehicle/RepositoryVehicle';
import ValidationMessage                      from '../../models/validation/ValidationMessage';
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


  const [vehicleList, setVehicleList] = React.useState(new Array<VehicleModel>());

  useEffect(() => {
    console.log("Fleet List Component Rendered");
    var repositoryVehicle = new RepositoryVehicle();
    repositoryVehicle.getVehicleList()
      .onSuccess((vehicleListData: Array<VehicleModel>) => {
        //console.log("ON SUCCESS");
        setVehicleList(vehicleListData);
      })
      .onValidationErrorsRaised((messages: Array<ValidationMessage>) => {
        //console.log("Validation Messages");
        //console.log(messages);
      })
      .onFailed((error: string) => {
        //console.log("failed to get vehicle list")
      })
  }
  );

  //
  // Template
  //
  return (
    <Paper className={classes.root}>
      <Table className={classes.table} size="small"  >
        <TableHead>
          <TableRow>
            <TableCell>Registration</TableCell>
            <TableCell>Make</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>Transmission</TableCell>
            <TableCell align="right">Doors</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vehicleList.map(row => (
            <TableRow key={row.entityKey}>
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