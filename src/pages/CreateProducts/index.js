import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, MenuItem, FormControl, Select, FormHelperText, Grid, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { BreadCrumbs } from "../../components/common/Breadcrumbs"
import { gateways } from '../../gateways'

export default function CreateProductsPage({ category }) {
  const classes = useStyles();
  const history = useHistory();
  const [file, setFile] = useState({})
  const [product, setProduct] = useState({});

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
      await gateways.productsGateway.create(formData)
      history.push('/products');
    } catch (error) {
      console.error(error)
    }
  }

  const handleChange = (event) => setProduct({ ...product, [event.target.name]: event.target.value });

  const handleFileChange = (event) => setFile(event.target.files[0]);

  return (
    <div>

      <BreadCrumbs
        items={[{
          link: '/products',
          label: 'Products'
        },
        {
          label: 'Product create'
        }]}
      />

      <form onSubmit={handleSubmit}
        noValidate
        autoComplete="off">
        <Grid container spacing={2} >

          <Grid item xs={12} md={4} lg={3}>
            <TextField
              fullWidth
              required
              name="name"
              label="Product name:"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <TextField
              fullWidth
              required
              name="price"
              label="Price ($):"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={4} lg={3} >
            <TextField
              fullWidth
              required
              name="description"
              label="Description:"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <TextField
              fullWidth
              required
              name="quantity"
              label="Quantity:"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <TextField
              fullWidth
              required
              name="status"
              label="Status:"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <TextField
              fullWidth
              name="metaHeaders"
              label="Meta Tag Title:"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <TextField
              fullWidth
              name="metaDescription"
              label="Meta Tag Description:"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <TextField
              fullWidth
              name="metaKeys"
              label="Meta Tag Keywords:"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <FormControl fullWidth>

              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={category}>

                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>

              </Select>

              <FormHelperText>Choose one of the category</FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <div className={classes.root}>

              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                onChange={handleFileChange}
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" component="span">
                  Upload image
                </Button>
                {file && file.name}
              </label>

            </div>
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <Button
              type="submit"
              variant="outlined"
            >
              Send
              </Button>
          </Grid>
        </Grid>

      </form>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));
