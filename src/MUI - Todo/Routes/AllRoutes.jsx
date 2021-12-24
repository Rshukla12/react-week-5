import { Switch, Route } from "react-router-dom";
import Todo from "../Pages/Todo";
import Task from "../Pages/Task";

const AllRoutes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Todo />
            </Route> 
            <Route exact path="/tasks/:id">
                <Task />
            </Route>       
        </Switch>
    );
};

export default AllRoutes;