import LoginView from "@components/login";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { routes } from "@utils/constant";
import { theme } from "@utils/theme";
import React, { useEffect } from "react";
import {
  Redirect, Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Logout from "./component/Logout";
import RegisterView from "./views/create-new-user";
import MyDashboard from "./views/dashboard";
import CreateNewOrganizationView from "./views/create-new-organization";

const Routes = () => {

  const [token, setToken] = React.useState(localStorage.getItem("token"));
  useEffect(() => {

  }, [token])

  if (token === null) {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Switch>
              <Route exact path={routes.login} render={(props) => <LoginView setToken={setToken} messageQueryString={props.location.message} {...props} />} />
              <Redirect to={routes.login} />
            </Switch>
          </Router>
        </ThemeProvider>
      </div>
    );
  } else {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Switch>
              <Route exact path={routes.dashboard} component={MyDashboard} />
              <Route exact path={routes.logout} render={(props) => <Logout setToken={setToken} {...props} />} />
              <Route exact path={routes.register} component={RegisterView} />
              <Route exact path={routes.organization} component={CreateNewOrganizationView} />
              <Redirect to={routes.dashboard} />
            </Switch>
          </Router>
        </ThemeProvider>
      </div>)
  }
};
export default Routes;