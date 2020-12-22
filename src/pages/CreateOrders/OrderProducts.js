import StickyHeadTable from '../../components/common/Table';
import React from 'react'
import Grid from '@material-ui/core/Grid';


export default function OrderProducts({
    handleAddProduct,
    products,
    total,
    updateTable
}) {

    return (
        <Grid container direction="column" spacing={2}>

            <Grid item>
                <StickyHeadTable
                    updateTable={updateTable}
                    total={total}
                    rows={products.map(product => {
                        return (
                            {
                                id: product.id,
                                img: product.image,
                                name: product.name,
                                status: product.status,
                                price: product.price,
                                quantity: product.quantity,
                            }
                        )
                    })}

                    headers={[
                        { label: 'Image' },
                        { label: 'Name' },
                        { label: 'Status' },
                        { label: 'Price' },
                        { label: 'Quantity' },
                    ]}

                    columns={[

                        {
                            key: 'img',
                            format: (value) => {
                                return <img height={32} src={value} alt='ups!' />
                            }
                        },
                        { key: 'name' },
                        { key: 'status' },
                        { key: 'price' },
                        { key: 'quantity' },
                    ]}

                    menuItems={[{ label: 'Add', onClick: handleAddProduct },]}
                />
            </Grid>
        </Grid>
    )
}