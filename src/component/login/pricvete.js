import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { useUserContext } from "./../../contexts/Authcontentx";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { user, registerUser } = useUserContext();

  return (
    <Switch>
      <Route
        {...rest}
        render={(props) => {
          return user ? <Component {...props} /> : <Redirect to="/login" />;
        }}
      ></Route>
    </Switch>
  );
}
