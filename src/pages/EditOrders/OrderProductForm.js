import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, TableContainer, Table, TableBody, TableRow, TableCell, Paper, TableHead } from '@material-ui/core';

export const OrderProductForm = ({
    saveProductInformation,
    productsDetails,
    setProductsDetails,
}) => {
    const classes = useStyles();
    return (
        <form onSubmit={saveProductInformation}>
            <Grid container spacing={2} className={classes.customerInformation}>
                <Grid item className={classes.customerInformation}>

                    <h2 className={classes.h2}>Products information</h2>

                    <TableContainer component={Paper}>
                        <Table aria-label="customized table">

                            <TableHead>
                                <TableRow>
                                    <TableCell>Image</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Quantity (kg)</TableCell>
                                    <TableCell>Price per 1 kg ($)</TableCell>
                                    <TableCell>Total ($)</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {productsDetails.map((product, index) => {
                                    return (< TableRow key={index}>

                                        < TableCell align='center'>
                                            <img
                                                src={product.img}
                                                className={classes.img}
                                                alt='img'
                                            />
                                        </TableCell>

                                        <TableCell align='center'>
                                            {product.name}
                                        </TableCell>

                                        <TableCell align='center'>
                                            <input
                                                style={{ width: '70px', textAlign: 'center' }}
                                                className={classes.input}
                                                name="quantity"
                                                value={product.quantity}
                                                onChange={
                                                    (event) => {
                                                        productsDetails[index].quantity = event.target.value;
                                                        productsDetails[index].total = event.target.value * productsDetails[index].price;
                                                        setProductsDetails([
                                                            ...productsDetails
                                                        ])
                                                    }
                                                } />
                                        </TableCell>

                                        <TableCell align='center'>
                                            {product.price}
                                        </TableCell>

                                        <TableCell align='center'>
                                            {product.total}
                                        </TableCell>

                                    </TableRow>)
                                })}

                                <TableRow>

                                    <TableCell align="right" colspan={4}>
                                        Total Sum:
                                                </TableCell>

                                    <TableCell >
                                        {productsDetails.reduce((total, product) => {
                                            total += product.total
                                            return total
                                        }, 0)}
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
                </Grid>
            </Grid>
        </form>
    )
}

const useStyles = makeStyles((theme) => ({
    customerInformation: {
        width: '550px',

    },
    h2: {
        textAlign: 'center'
    },
    img: {
        width: '30px'
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
