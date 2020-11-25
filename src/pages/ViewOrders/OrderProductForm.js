import { makeStyles } from '@material-ui/core/styles';
import { Grid, TableContainer, Table, TableBody, TableRow, TableCell, Paper, TableHead } from '@material-ui/core';


export const OrderProductForm = ({ productsDetails }) => {
    const classes = useStyles();
    return (
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
                                return (< TableRow >
                                    {product[index]}
                                    < TableCell align='center'>
                                        <img src={product.img} className={classes.img} alt='img' />
                                    </TableCell>
                                    <TableCell align='center'>{product.name}</TableCell>
                                    <TableCell align='center'>{product.quantity}</TableCell>
                                    <TableCell align='center'>{product.price}</TableCell>
                                    <TableCell align='center'>{product.total}</TableCell>
                                </TableRow>)
                            })}
                        </TableBody>

                    </Table>
                </TableContainer>
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
    img: {
        width: '30px'
    }
}));