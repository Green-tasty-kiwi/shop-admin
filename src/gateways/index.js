import { RequestSender } from '../core/RequestSender';
import { OrdersGateway } from './OrdersGateway';
import { ProductsGateway } from './ProductsGateway';
import { UsersGateway } from './UsersGateway';
import { CustomersGateway } from './CustomersGateway';

const requestSender = new RequestSender();

export const gateways = {
    ordersGateway: new OrdersGateway({
        requestSender,
    }),
    productsGateway: new ProductsGateway({
        requestSender,
    }),
    usersGateway: new UsersGateway({
        requestSender,
    }),
    customersGateway: new CustomersGateway({
        requestSender,
    }),
};