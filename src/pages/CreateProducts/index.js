import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, MenuItem, FormControl, Select, FormHelperText, Grid, Button, IconButton } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { BreadCrumbs } from "../../components/common/Breadcrumbs"


export default function CreateProductsPage({ category }) {
  const classes = useStyles();
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

      <form noValidate autoComplete="off">
        <Grid container spacing={2} >

          <Grid item xs={12} md={4} lg={3}>
            <TextField fullWidth required label="Product name:" />
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <TextField fullWidth required label="Price ($):" />
          </Grid>

          <Grid item xs={12} md={4} lg={3} >
            <TextField fullWidth required label="Description:" />
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <TextField fullWidth required label="Quantity:" />
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <TextField fullWidth required label="Meta Tag Title:" />
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <TextField fullWidth required label="Meta Tag Description:" />
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <TextField fullWidth required label="Meta Tag Keywords:" />
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
            <div fullWidth className={classes.root}>

              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" component="span">
                  Upload
                </Button>
              </label>

              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton aria-label="upload picture" component="span">
                  <PhotoCamera />
                </IconButton>
              </label>
            </div>
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <Button
              variant="outlined"
              onClick={() => { alert('clicked') }}>
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
