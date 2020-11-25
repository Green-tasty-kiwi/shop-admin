import { Divider, Grid, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

export const ProductsForm = ({ product }) => {
    const classes = useStyles();
    return (
        <Grid container direction="row" >

            <Grid item xs={4}>
                <div>
                    <img className={classes.img} src={product.img} alt='orange' />
                </div>
            </Grid>

            <Grid item xs={8}>
                <Grid
                    container
                    direction='column'
                    className={classes.productInfoBox}
                    wrap="wrap">

                    <Typography variant='h5'>
                        {product.name}
                        <span className={classes.price}>
                            &nbsp;{product.price} $
                    </span>
                    </Typography>

                    <Typography variant='OVERLINE TEXT'>
                        <span>{product.status}</span>
                    &nbsp;({product.quantity} kg)
                    </Typography>

                    <Typography variant='subtitle1'>
                        {product.desription}
                    </Typography>

                </Grid>

                <Divider />

                <Grid container direction='row' className={classes.productMeta}>

                    <Grid item xs={12} >
                        <Typography variant='body1'>
                            Meta header: {product.meta_header}
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant='body1'>
                            Meta description: {product.meta_description}
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant='body1'>
                            Meta keys: {product.meta_key}
                        </Typography>
                    </Grid>

                </Grid>
            </Grid>

        </Grid >
    )
}

const useStyles = makeStyles((theme) => ({
    img: {
        width: '100%'
    },
    div: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginLeft: '30px'
    },

    price: {
        fontWeight: 300
    },
    productInfoBox: {
        textAlign: 'center'
    },
    productMeta: {
        marginLeft: '20px'
    }
}));