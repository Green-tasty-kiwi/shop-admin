import StickyHeadTable from '../../components/common/Table';
import React from 'react'
import Grid from '@material-ui/core/Grid';


export default function OrderProducts({ handleAddProduct, handleRemoveProduct, products }) {

    return (
        <Grid container direction="column" spacing={2}>

            <Grid item>
                <StickyHeadTable
                    rows={products}

                    headers={[{ label: 'Image' }, { label: 'Name' },]}

                    columns={[
                        { key: 'name' },
                        {
                            key: 'img',
                            format: (value) => {
                                return <img height={32} src={value} alt='ups!' />
                            }
                        }
                    ]}

                    menuItems={[{ label: 'Add', onClick: handleAddProduct },
                    { label: 'Delete', onClick: handleRemoveProduct },]}
                />
            </Grid>
        </Grid>
    )
}