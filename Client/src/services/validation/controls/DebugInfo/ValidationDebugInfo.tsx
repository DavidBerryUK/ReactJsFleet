import { Box }                                  from '@material-ui/core';
import { classStyleDefinition }                 from './classStyleDefinition'
import { Paper }                                from '@material-ui/core';
import { Typography }                           from '@material-ui/core';
import { ValidationContext }                    from "../../context/context/ValidationContext"
import React                                    from 'react';
import Table                                    from '@material-ui/core/Table';
import TableBody                                from '@material-ui/core/TableBody';
import TableCell                                from '@material-ui/core/TableCell';
import TableHead                                from '@material-ui/core/TableHead';
import TableRow                                 from '@material-ui/core/TableRow';
import ValidatedTextField from '../TextField/ValidatedTextField';
//import ValidatedTextField from '../TextField/ValidatedTextField';

//
// Shows debug formation for a form
//
const ValidationDebugInfo: React.FC = () => {

    const classStyles = classStyleDefinition();

    return (
        <ValidationContext.Consumer>
            {(context) => (
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
                                <TableCell>Field Name</TableCell>
                                <TableCell>Value</TableCell>
                                <TableCell>Is Valid</TableCell>
                                <TableCell>Error Message</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {context.fields.map((row : ValidatedTextField) => (
                            <TableRow key={row.name}>
                                <TableCell >{row.name}</TableCell>              
                                <TableCell >{row.state.text}</TableCell>
                                <TableCell >{row.state.isValid ? "yes" : "no"}</TableCell>
                                <TableCell >{row.state.validationError}</TableCell>
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
