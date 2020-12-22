import StickyHeadTable from '../../components/common/Table';
import { Button } from '../../components/form/Button';
import { React, useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import { gateways } from '../../gateways';

export default function ProductsPage() {
    const [page, setPage] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState()

    const updateTable = ({ page, rowsPerPage }) => {
        setPage(page);
        setPerPage(rowsPerPage)
    }

    useEffect(() => {
        gateways.productsGateway.findAll({ page, perPage }).then((products) => {
            const { count, rows } = products;
            setProducts(rows);
            setTotal(count)
        });
    }, [page, perPage])



    const history = useHistory()
    return (
        <Grid container direction="column" spacing={2}>

            <Grid item>
                <Grid container justify="flex-end">
                    <Button to="/products/create"> Create product</Button>
                </Grid>
            </Grid>

            <Grid item>
                <StickyHeadTable

                    updateTable={updateTable}

                    total={total}

                    rows={
                        products.map(product => {
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
                        })
                    }

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

                    menuItems={[
                        { label: 'View', onClick: (id) => { history.push(`/products/${id}`) } },
                        { label: 'Edit', onClick: (id) => { history.push(`/products/${id}/edit`) } }
                    ]}
                />
            </Grid>
        </Grid>
    )
}