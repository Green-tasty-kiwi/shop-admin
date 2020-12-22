import { Grid, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@material-ui/core';

export const CustomerInfo = ({ orderCustomer }) => {
    return (

        <Grid item>
            <h2>Customer information</h2>

            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableBody>

                        <TableRow >
                            <TableCell style={{ width: '20%' }}>
                                Phone number:
                        </TableCell>
                            <TableCell name='phone' align="left">{orderCustomer.phone}</TableCell>
                        </TableRow>

                        <TableRow >
                            <TableCell>
                                First Name:
                        </TableCell>
                            <TableCell name='firstName' align="left">{orderCustomer.firstName}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>
                                Last Name:
                        </TableCell>
                            <TableCell name='lastName' align="left">{orderCustomer.lastName}</TableCell>
                        </TableRow>

                        <TableRow >
                            <TableCell>
                                City:
                        </TableCell>
                            <TableCell name='city' align="left">{orderCustomer.city}</TableCell>
                        </TableRow>

                        <TableRow >
                            <TableCell>
                                Address:
                        </TableCell>
                            <TableCell name='address' align="left">{orderCustomer.address}</TableCell>
                        </TableRow>

                        <TableRow >
                            <TableCell>
                                House:
                        </TableCell>
                            <TableCell name='house' align="left">{orderCustomer.house}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>
                                Appartment:
                        </TableCell>
                            <TableCell name='appartment' align="left">{orderCustomer.appartment}</TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}