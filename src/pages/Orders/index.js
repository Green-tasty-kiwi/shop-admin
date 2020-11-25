import React from 'react';
import { Button } from '../../components/form/Button';
import StickyHeadTable from '../../components/common/Table';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';

const testOrders = [
    {
        id: '246793020',
        first_name: 'Jhon',
        last_Name: 'Smith',
        phone_number: '+' + 356740028
    }
];

export default function OrdersPage() {
    const history = useHistory();
    const [orders, setOrders] = React.useState(testOrders);

    return (
        <Grid container direction="column" spacing={2}>

            <Grid item>
                <Grid
                    container
                    justify="flex-end"
                >
                    <Button to="/orders/create">Create order</Button>
                </Grid>
            </Grid>

            <Grid item>
                <StickyHeadTable
                    rows={orders}

                    headers={[
                        { label: 'ID' },
                        { label: 'FIRST NAME' },
                        { label: 'FIRST NAME' },
                        { label: 'PHONE NUMBER' }
                    ]}

                    columns={[
                        { key: 'id' },
                        { key: 'first_name' },
                        { key: 'last_Name' },
                        { key: 'phone_number' },
                    ]}

                    menuItems={[
                        { label: 'View', onClick: (id) => { history.push(`/orders/${id}`) } },
                        { label: 'Edit', onClick: (id) => { history.push(`/orders/${id}/edit`) } }
                    ]}
                />
            </Grid>

        </Grid>
    );
}