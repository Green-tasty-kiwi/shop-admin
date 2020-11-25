import { BreadCrumbs } from "../../components/common/Breadcrumbs";
import { CustomersForm } from "./CustomersForm"

const defaultCustomerDetails = {
    phone: 545333,
    first_name: 'Jhon',
    last_name: 'Smith',
    city: 'Kiev',
    address: 'street',
    house: 55,
    appartment: 48,
}

export default function ViewCustomers({ customerDetails = defaultCustomerDetails }) {
    return (
        <div>
            <BreadCrumbs
                items={[{
                    link: '/customers',
                    label: 'Customers'
                },
                {
                    label: 'Customer view'
                }]}
            />

            <CustomersForm customerDetails={customerDetails} />
        </div >)
}

