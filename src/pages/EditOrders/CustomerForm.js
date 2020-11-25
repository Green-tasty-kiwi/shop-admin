import { Button, Grid, TableContainer, Table, TableBody, TableRow, TableCell, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const CustomerForm = ({
    saveCustomerInformation,
    customerDetails,
    changeCustomerInformation,

}) => {
    const classes = useStyles();
    return (
        <Grid container spacing={2} className={classes.customerInformation}>
            <Grid item className={classes.customerInformation}>

                <h2 className={classes.h2}>Customer information</h2>
                <form onSubmit={saveCustomerInformation}>
                    <TableContainer component={Paper}>
                        <Table aria-label="customized table">
                            <TableBody>
                                <TableRow >
                                    <TableCell style={{ width: '30%' }}>
                                        Phone number:
                            </TableCell>

                                    <TableCell align="left">
                                        <input
                                            className={classes.input}
                                            name='phone'
                                            value={customerDetails.phone}
                                            onChange={changeCustomerInformation} />
                                    </TableCell>
                                </TableRow>

                                <TableRow >
                                    <TableCell>
                                        First Name:
                            </TableCell>

                                    <TableCell align="left">
                                        <input
                                            className={classes.input}
                                            name='first_name'
                                            value={customerDetails.first_name}
                                            onChange={changeCustomerInformation} />
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>
                                        Last Name:
                            </TableCell>

                                    <TableCell align="left">
                                        <input
                                            className={classes.input}
                                            name='last_name'
                                            value={customerDetails.last_name}
                                            onChange={changeCustomerInformation} />
                                    </TableCell>
                                </TableRow>

                                <TableRow >
                                    <TableCell>
                                        City:
                            </TableCell>

                                    <TableCell align="left">
                                        <input
                                            className={classes.input}
                                            name='city'
                                            value={customerDetails.city}
                                            onChange={changeCustomerInformation} />
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>
                                        Address:
                            </TableCell>

                                    <TableCell align="left">
                                        <input
                                            className={classes.input}
                                            name='address'
                                            value={customerDetails.address}
                                            onChange={changeCustomerInformation} />
                                    </TableCell>
                                </TableRow>

                                <TableRow >
                                    <TableCell>
                                        House:
                            </TableCell>

                                    <TableCell align="left">
                                        <input
                                            className={classes.input}
                                            name='house'
                                            value={customerDetails.house}
                                            onChange={changeCustomerInformation} />
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>
                                        Appartment:
                            </TableCell>

                                    <TableCell align="left">
                                        <input
                                            className={classes.input}
                                            name='appartment'
                                            value={customerDetails.appartment}
                                            onChange={changeCustomerInformation} />
                                    </TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Button
                        type='submit'
                        variant="contained"
                        color="default"
                        className={classes.btn}
                    >
                        Save
                    </Button>
                </form>
            </Grid>
        </Grid>
    )
}

const useStyles = makeStyles((theme) => ({
    customerInformation: {
        width: '550px',

    },
    h2: {
        textAlign: 'center'
    },
    btn: {
        float: 'right',
        marginTop: '10px',
        width: '100px',
    },
    input: {
        border: '1px solid lightgrey',
        height: '30px',
        borderRadius: '10px',
    }
}));
