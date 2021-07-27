import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "../pages/Home";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";

const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const [user, setUser] = useState([]);

  const [token, setToken] = useState();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));

    setToken(token);

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Home authenticated={authenticated} />
      </Route>
      <Route path="/signup">
        <Signup authenticated={authenticated} />
      </Route>
      <Route path="/login">
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          setUser={setUser}
          user={user}
        />
      </Route>
      <Route path="/dashboard">
        <Dashboard authenticated={authenticated} user={user} token={token} />
      </Route>
    </Switch>
  );
};

export default Routes;
