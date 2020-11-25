import StickyHeadTable from '../../components/common/Table';
import React from 'react'
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';

export default function CustomersPage(params) {
    const history = useHistory()
    return (
        <Grid container direction="column" spacing={2}>
            <Grid item>
                <StickyHeadTable
                    rows={[
                        {
                            id: 1,
                            phone: 304099,
                            first_name: 'Jhon',
                            last_name: 'Smith'
                        }
                    ]}

                    headers={[
                        { label: 'Phone' },
                        { label: 'First name' },
                        { label: 'Last name' },
                    ]}

                    columns={[
                        { key: 'phone' },
                        { key: 'first_name' },
                        { key: 'last_name' },
                    ]}

                    menuItems={[
                        {
                            label: 'View',
                            onClick: (id) => { history.push(`/customers/${id}`) }
                        },
                    ]}
                />
            </Grid>
        </Grid>
    )
}