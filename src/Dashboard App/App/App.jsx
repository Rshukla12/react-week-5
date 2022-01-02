import { Route, Switch } from "react-router-dom"
import Dashboard from "../Dashboard/Dashboard";
import Orders from "../Orders/Orders";
import SiteLayout from "./Components/SiteLayout"

const App = () => {
    return (
        <SiteLayout>
            <Switch>
                <Route exact path="/">
                    <Dashboard />
                </Route>
                <Route exact path="/orders">
                    <Orders />
                </Route>
            </Switch>
        </SiteLayout>
    )
}

export default App;