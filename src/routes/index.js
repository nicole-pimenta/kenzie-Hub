import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../components/Signup";
import Login from "../components/Login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;
