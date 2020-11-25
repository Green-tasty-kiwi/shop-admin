import { Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import TextField from "../../components/form/TextField";
import { BreadCrumbs } from "../../components/common/Breadcrumbs"

const defaultProduct = {
    id: 1,
    img: 'https://befreshcorp.net/wp-content/uploads/2017/07/product-packshot-Orange.jpg',
    name: 'Orange',
    status: 'enabled',
    desription: 'juice',
    price: 20,
    quantity: 100,
    meta_header: 'tralala',
    meta_key: 'trululu',
    meta_description: 'trololo'
}

export default function EditProducts({ product = defaultProduct }) {
    const classes = useStyles();

    return (
        <div>
            <BreadCrumbs
                items={[{
                    link: '/products',
                    label: 'Products'
                },
                {
                    label: 'Product edit'
                }]}
            />
            <form className={classes.form} noValidate autoComplete="off">
                <TextField
                    label='Product name'
                    defaultValue={product.name}
                    name="name"
                />

                <TextField
                    label='Description'
                    name="description"
                />

                <TextField
                    label='Price ($):'
                    defaultValue={product.price}
                    name="price"
                />

                <TextField
                    label='Quantity (kg):'
                    defaultValue={product.quantity}
                    name="quantity"
                />

                <TextField
                    label='Status:'
                    defaultValue={product.status}
                    name="status"
                />

                <TextField
                    label='Meta header:'
                    name="meta_header"
                />

                <TextField
                    label='Meta description:'
                    name="meta_description"
                />

                <TextField
                    label='Meta key words:'
                    name="meta_key"
                />

                <div>
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                    />

                    <label htmlFor="contained-button-file">
                        <Button
                            variant="contained"
                            color="default"
                            className={classes.button}
                            startIcon={<CloudUploadIcon />}
                            component="span"
                        >
                            Upload
                        </Button>
                    </label>

                    <Button
                        variant="contained"
                        color="default"
                        className={classes.button}
                        type="submit"
                        onClick={() => { alert('Data was sent!') }}
                    >
                        Send
                    </Button>
                </div>
            </form>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    form: {
        margin: '0 auto',
        maxWidth: '850px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    button: {
        margin: theme.spacing(1),
        width: '200px',
    },
    input: {
        display: 'none',
    },
}));