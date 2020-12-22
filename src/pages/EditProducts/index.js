import { React, useEffect, useState } from "react";
import { Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import TextField from "../../components/form/TextField";
import { BreadCrumbs } from "../../components/common/Breadcrumbs"
import { useParams } from 'react-router-dom';
import { gateways } from '../../gateways';
import { useHistory } from 'react-router-dom';

export default function EditProducts() {
    const classes = useStyles();
    const history = useHistory();
    const [product, setProduct] = useState();
    const [file, setFile] = useState({})
    const params = useParams();

    useEffect(() => {
        const findProduct = async () => {
            const response = await gateways.productsGateway
                .findById(params.id)
                .catch(error => console.error(error.message));

            setProduct(response);
        }
        findProduct();

    }, [params.id]);

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const formData = new FormData();

            formData.set('name', product.name);
            formData.set('price', product.price);
            formData.set('description', product.description);
            formData.set('quantity', product.quantity);
            formData.set('status', product.status);
            formData.set('metaHeaders', product.metaHeaders);
            formData.set('metaDescription', product.metaDescription);
            formData.set('metaKeys', product.metaKeys);

            formData.set('image', file);
            await gateways.productsGateway.update(params.id, formData)
            history.push('/products');
        } catch (error) {
            console.error(error)
        }
    }

    const handleChange = (event) => setProduct({ ...product, [event.target.name]: event.target.value });

    const handleFileChange = (event) => setFile(event.target.files[0]);

    if (!product) return ('Loading...');



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
            <form
                onSubmit={handleSubmit}
                className={classes.form}
                noValidate
                autoComplete="off">

                <TextField
                    label='Product name'
                    defaultValue={product.name}
                    name="name"
                    onChange={handleChange}
                />

                <TextField
                    label='Description'
                    name="description"
                    onChange={handleChange}
                />

                <TextField
                    label='Price ($):'
                    defaultValue={product.price}
                    name="price"
                    onChange={handleChange}
                />

                <TextField
                    label='Quantity (kg):'
                    defaultValue={product.quantity}
                    name="quantity"
                    onChange={handleChange}
                />

                <TextField
                    label='Status:'
                    defaultValue={product.status}
                    name="status"
                    onChange={handleChange}
                />

                <TextField
                    label='Meta header:'
                    name="metaHeaders"
                    onChange={handleChange}
                />

                <TextField
                    label='Meta description:'
                    name="metaDescription"
                    onChange={handleChange}
                />

                <TextField
                    label='Meta key words:'
                    name="metaKeys"
                    onChange={handleChange}
                />

                <div>
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={handleFileChange}
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
                        {file && file.name}
                    </label>

                    <Button
                        variant="contained"
                        color="default"
                        className={classes.button}
                        type="submit"
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