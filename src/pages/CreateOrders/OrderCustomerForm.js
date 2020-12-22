import React from 'react';
import { TextField, MenuItem, FormControl, Select, FormHelperText, Grid } from '@material-ui/core';

export default function OrderCustomerForm({
    handleChange,
    city,
    phone,
    firstName,
    lastName,
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
                        type="tel"
                        name="phone"
                        value={phone}
                        fullWidth
                        required
                        label="Phone number:"
                        onChange={handleChange}>
                    </TextField>
                </Grid>

                <Grid item xs={12} md={4} lg={3}>
                    <TextField
                        fullWidth
                        required
                        value={firstName}
                        name="firstName"
                        label="First name:"
                        onChange={handleChange}
                    />
                </Grid>

                <Grid item xs={12} md={4} lg={3} >
                    <TextField
                        fullWidth
                        required
                        value={lastName}
                        name="lastName"
                        label="Last name:"
                        onChange={handleChange} />
                </Grid>

                <Grid item xs={12} md={4} lg={3}>
                    <FormControl fullWidth>
                        <Select
                            value={city}
                            onChange={handleChange}
                            name="city">
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