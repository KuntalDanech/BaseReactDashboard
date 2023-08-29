import React, { Suspense } from 'react';
import { render, screen } from '@testing-library/react';
import LoginView from './index';
import {
  BrowserRouter as Router, Redirect, Route, Switch
} from "react-router-dom";

it('renders welcome message', () => {
  render(

    <Router>
      <Suspense fallback={<div>
      </div>}>
        <Switch>
          <Route exact path="/login" render={(props) => <LoginView/>} />
          <Redirect to="/login" />
        </Switch>
      </Suspense>
    </Router>
  );
  expect(screen.getByText("Welcome, login to MyAccount")).toBeInTheDocument()
});