import { makeStyles } from '@material-ui/core/styles';
import { Grid, TableContainer, Table, TableBody, TableRow, TableCell, Paper, } from '@material-ui/core';

export const CustomersForm = ({ customerDetails }) => {
    const classes = useStyles();
    return (
        <Grid container justify="center" direction="row">
            <Grid container spacing={2} className={classes.customerInformation}>

                <Grid item className={classes.customerInformation}>

                    <h2 className={classes.h2}>Customer information</h2>

                    <TableContainer component={Paper}>
                        <Table aria-label="customized table">
                            <TableBody>

                                <TableRow >
                                    <TableCell style={{ width: '30%' }}>
                                        Phone number:
                                    </TableCell>
                                    <TableCell align="left">
                                        {customerDetails.phone}
                                    </TableCell>
                                </TableRow>

                                <TableRow >
                                    <TableCell>
                                        First Name:
                                    </TableCell>
                                    <TableCell align="left">
                                        {customerDetails.first_name}
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>
                                        Last Name:
                                    </TableCell>
                                    <TableCell align="left">
                                        {customerDetails.last_name}
                                    </TableCell>
                                </TableRow>

                                <TableRow >
                                    <TableCell>
                                        City:
                                    </TableCell>
                                    <TableCell align="left">
                                        {customerDetails.city}
                                    </TableCell>
                                </TableRow>

                                <TableRow >
                                    <TableCell>
                                        Address:
                                    </TableCell>
                                    <TableCell align="left">
                                        {customerDetails.address}
                                    </TableCell>
                                </TableRow>

                                <TableRow >
                                    <TableCell>
                                        House:
                                    </TableCell>
                                    <TableCell align="left">
                                        {customerDetails.house}
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>
                                        Appartment:
                                    </TableCell>
                                    <TableCell align="left">
                                        {customerDetails.appartment}
                                    </TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Grid >
    )
}

const useStyles = makeStyles((theme) => ({
    customerInformation: {
        width: '550px',

    },
    h2: {
        textAlign: 'center'
    },
}));