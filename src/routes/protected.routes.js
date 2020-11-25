import App from '../App';
import ProductsPage from '../pages/ProductsPage';
import CreateProductsPage from '../pages/CreateProducts';
import ViewProducts from '../pages/ViewProducts';
import EditProducts from '../pages/EditProducts';
import OrdersPage from '../pages/Orders';
import CreateOrders from '../pages/CreateOrders';
import ViewOrders from '../pages/ViewOrders';
import EditOrders from '../pages/EditOrders';
import Customers from '../pages/Customers'
import ViewCustomers from '../pages/ViewCustomers'
import { Route, Switch, Redirect } from "react-router-dom";

export const ProtectedRoutes = () => {
    return (
        <App>
            <Switch>
                <Redirect from="/" exact to="/products" />
                <Route path="/products" exact component={ProductsPage} />
                <Route path="/products/create" exact component={CreateProductsPage} />
                <Route path="/products/:id" exact component={ViewProducts} />
                <Route path="/products/:id/edit" exact component={EditProducts} />
                <Route path="/orders" exact component={OrdersPage} />
                <Route path="/orders/create" exact component={CreateOrders} />
                <Route path="/orders/:id" exact component={ViewOrders} />
                <Route path="/orders/:id/edit" exact component={EditOrders} />
                <Route path="/customers" exact component={Customers} />
                <Route path="/customers/:id" exact component={ViewCustomers} />
                <Redirect from="*" exact to="/" />
            </Switch>
        </App>
    )
}