import React from "react";
import LoginForm from "./login/LoginForm";
import QAMain from "./qa/QAMain";
import { notification } from "antd";
import { Route, withRouter, Switch, useHistory } from "react-router-dom";
import NotFound from './common/NotFound';

const App = () => {
  const history = useHistory();

  const goQAMain = () => {
    history.push("/qa");
  };

  const handleLogin = () => {
    console.log("handleLogin starting ...");
    notification.success({
      message: "QA App",
      description: "You're successfully logged in.",
    });
    goQAMain();
  };

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => <LoginForm onLogin={handleLogin} {...props} />}
      ></Route>
      <Route path="/qa" render={() => <QAMain />}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  );
};

export default withRouter(App);
