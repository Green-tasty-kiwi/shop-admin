import { Grid } from '@material-ui/core';
import { useState } from 'react';
import { BreadCrumbs } from "../../components/common/Breadcrumbs";
import { CustomerForm } from "./CustomerForm";
import { OrderProductForm } from "./OrderProductForm";

const testCustomer = {
    phone: 545333,
    first_name: 'Jhon',
    last_name: 'Smith',
    city: 'Kiev',
    address: 'street',
    house: 55,
    appartment: 48,
}

const testProducts = [
    {
        img: 'https://befreshcorp.net/wp-content/uploads/2017/07/product-packshot-Orange.jpg',
        name: 'Orange',
        quantity: 5,
        price: 20,
        total: 100,
    },
    {
        img: 'https://befreshcorp.net/wp-content/uploads/2017/07/product-packshot-Orange.jpg',
        name: 'Orange',
        quantity: 10,
        price: 40,
        total: 400,
    }
]

export default function EditOrders() {

    const [customerDetails, setCustomerDetails] = useState(testCustomer)

    const [productsDetails, setProductsDetails] = useState(testProducts)

    function changeCustomerInformation(event) {
        setCustomerDetails({
            ...customerDetails,
            [event.target.name]: event.target.value
        })
    }

    function saveCustomerInformation(event) {
        event.preventDefault();
        alert('Info about customer was changed')
    }

    function saveProductInformation(event) {
        event.preventDefault();
        alert('Info about order products was changed')
    }

    return (
        <div>
            <BreadCrumbs
                items={[{
                    link: '/orders',
                    label: 'Orders'
                },
                {
                    label: 'Order edit'
                }]}
            />

            <Grid container justify="space-between" direction="row">

                <CustomerForm
                    saveCustomerInformation={saveCustomerInformation}
                    customerDetails={customerDetails}
                    changeCustomerInformation={changeCustomerInformation}
                />

                <OrderProductForm
                    saveProductInformation={saveProductInformation}
                    productsDetails={productsDetails}
                    setProductsDetails={setProductsDetails}
                />

            </Grid >
        </div>)
}

