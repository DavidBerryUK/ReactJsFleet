import { Box }                                  from '@material-ui/core';
import { classStyleDefinition }                 from './classStyleDefinition'
import { IValidationContextActions }            from '../../context/interfaces/IValidationContextActions';
import { IValidationContextState }              from '../../context/interfaces/IValidationContextState';
import { Paper }                                from '@material-ui/core';
import { Typography }                           from '@material-ui/core';
import { ValidationContext }                    from "../../context/context/ValidationContext"
import ControlInfoModel                         from '../../models/ControlInfoModel';
import React                                    from 'react';
import Table                                    from '@material-ui/core/Table';
import TableBody                                from '@material-ui/core/TableBody';
import TableCell                                from '@material-ui/core/TableCell';
import TableHead                                from '@material-ui/core/TableHead';
import TableRow                                 from '@material-ui/core/TableRow';

//
// Shows debug formation for a form
//
const ValidationDebugInfo: React.FC = () => {

    const classStyles = classStyleDefinition();

    return (
        <ValidationContext.Consumer>
            {(context : IValidationContextState & IValidationContextActions ) => (
                <Paper className={classStyles.paper} >
                    <Box textAlign="center">
                        <Typography variant="h5" >Form Context Summary Information</Typography>
                    </Box>

                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Field Count</TableCell>
                                <TableCell>Valid Fields</TableCell>
                                <TableCell>Invalid Fields</TableCell>
                                <TableCell>Is Valid</TableCell>
                                <TableCell>Fully Parsed</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>{context.fields.length}</TableCell>
                                <TableCell>{context.fieldsValidCount}</TableCell>
                                <TableCell>{context.fieldsInvalidCount}</TableCell>
                                <TableCell>{context.isFormValid ? "yes" : "no"}</TableCell>
                                <TableCell>{context.hasBeenFullyValidated ? "yes" : "no"}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                    <Box textAlign="center">
                        <Typography variant="h5" >Form Context Field Information</Typography>
                    </Box>

                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Field</TableCell>
                                <TableCell>Value</TableCell>
                                <TableCell>Valid</TableCell>
                                <TableCell>Error</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {context.controlInfoCollection.items.map((row : ControlInfoModel) => (
                            <TableRow key={row.name}>
                                <TableCell >{row.name}</TableCell>              
                                <TableCell >{row.value}</TableCell>
                                <TableCell >{row.isValid ? "yes" : "no"}</TableCell>
                                <TableCell >{row.errorMessage}</TableCell>
                            </TableRow>
                        ))}                
                        </TableBody>
                    </Table>
                </Paper>
            )}
        </ValidationContext.Consumer>
    );
}

export default ValidationDebugInfo
