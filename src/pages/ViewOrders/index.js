import { Grid } from '@material-ui/core';
import { BreadCrumbs } from "../../components/common/Breadcrumbs";
import { CustomerForm } from "./CustomerForm";
import { OrderProductForm } from "./OrderProductForm";

const defaultCustomerDetails = {
    phone: 545333,
    first_name: 'Jhon',
    last_name: 'Smith',
    city: 'Kiev',
    address: 'street',
    house: 55,
    appartment: 48,
}

const defaultProductsDetails = [{
    img: 'https://befreshcorp.net/wp-content/uploads/2017/07/product-packshot-Orange.jpg',
    name: 'Orange',
    quantity: 5,
    price: 20,
    total: 100,
},
{
    img: 'https://befreshcorp.net/wp-content/uploads/2017/07/product-packshot-Orange.jpg',
    name: 'Orange',
    quantity: 5,
    price: 20,
    total: 100,
}]

export default function ViewOrders({
    customerDetails = defaultCustomerDetails,
    productsDetails = defaultProductsDetails
}) {
    return (
        <div>
            <BreadCrumbs
                items={[{
                    link: '/orders',
                    label: 'Orders'
                },
                {
                    label: 'Order view'
                }]}
            />

            <Grid container justify="space-between" direction="row">

                <CustomerForm customerDetails={customerDetails} />

                <OrderProductForm productsDetails={productsDetails} />

            </Grid >
        </div >)
}

