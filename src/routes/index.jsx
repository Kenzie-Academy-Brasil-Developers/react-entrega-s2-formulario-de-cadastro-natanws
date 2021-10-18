import { Switch, Route } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <SignUp />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
