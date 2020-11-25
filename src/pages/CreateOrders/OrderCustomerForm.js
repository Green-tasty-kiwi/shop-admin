import React from 'react';
import { TextField, MenuItem, FormControl, Select, FormHelperText, Grid } from '@material-ui/core';

export default function OrderCustomerForm({
    handleChange,
    city,
    phone,
    first_name,
    last_name,
    address,
    house,
    appartment
}) {
    return (
        <form noValidate autoComplete="off">
            <Grid container spacing={2} >

                <Grid item xs={12} md={4} lg={3}>
                    <TextField
                        name="phone"
                        value={phone}
                        fullWidth
                        required
                        label="Phone number:"
                        onChange={handleChange}
                    />
                </Grid>

                <Grid item xs={12} md={4} lg={3}>
                    <TextField
                        fullWidth
                        required
                        value={first_name}
                        name="first_name"
                        label="First name:"
                        onChange={handleChange}
                    />
                </Grid>

                <Grid item xs={12} md={4} lg={3} >
                    <TextField
                        fullWidth
                        required
                        value={last_name}
                        name="last_name"
                        label="Last name:"
                        onChange={handleChange} />
                </Grid>

                <Grid item xs={12} md={4} lg={3}>
                    <FormControl fullWidth>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={city}
                            onChange={handleChange}
                            name="city">

                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'Odessa'}>Odessa</MenuItem>
                            <MenuItem value={'Charkov'}>Charkov</MenuItem>
                            <MenuItem value={'Kiev'}>Kiev</MenuItem>

                        </Select>
                        <FormHelperText>Choose one of the city</FormHelperText>
                    </FormControl>
                </Grid>

                <Grid item xs={12} md={4} lg={3}>
                    <TextField
                        fullWidth
                        required
                        value={address}
                        name="address"
                        label="Address:"
                        onChange={handleChange}
                    />
                </Grid>

                <Grid item xs={12} md={4} lg={3}>
                    <TextField
                        fullWidth
                        required
                        value={house}
                        name="house"
                        label="House:"
                        onChange={handleChange}
                    />
                </Grid>

                <Grid item xs={12} md={4} lg={3}>
                    <TextField
                        fullWidth
                        required
                        value={appartment}
                        name="appartment"
                        label="Appartment:"
                        onChange={handleChange} />
                </Grid>
            </Grid>

        </form>
    );
}