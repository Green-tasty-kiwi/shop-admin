import SignIn from '../pages/SignIn';
import { Route, Switch, Redirect } from "react-router-dom";

export const UnprotectedRoutes = () => {
    return (
        <Switch>
            <Route path="/signin" exact component={SignIn} />
            <Redirect from="*" exact to="/signin" />
        </Switch>
    )
}