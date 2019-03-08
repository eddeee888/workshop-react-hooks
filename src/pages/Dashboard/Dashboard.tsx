/**
 * Exercise 3: `useEffect`
 *
 * `useEffect` lets you perform side effects of a function. This can be used to replace `componentDidMount`, `componentDidUpdate` and `componentWillUnmount`
 *
 * `useEffect` takes a function that would be executed as a side effect. i.e. it will replace `componentDidMount` and `componentDidUpdate`.
 * The return of said function can be a function. This function will get called when the component is unmounted i.e. it will replace `componentWillUnmount`
 *
 * NOTE: We are using `ViewerConsumer` because hooks cannot be used in class components at the moment.
 *
 * How it works:
 * src/pages/Dashboard/Dashboard.exercise-3.tsx
 *
 * Exercise:
 * use `useEffect` to add following effects to logout component:
 * - pop up an alert that says we are logging out when mounting.
 * - when the component is unmounting, log user out.
 * - BONUS: check if user wants to delete their account. If they do, remove their user account (using `UsersContext`)
 * src/pages/Logout/Logout.tsx
 *
 * Answer:
 * src/pages/Logout/Logout.answer-3.tsx
 */

import React from 'react';
import { Redirect } from 'react-router';
import Paper from 'src/common/components/Paper';
import Row from 'src/common/components/Row';
import { ViewerConsumer } from 'src/common/components/ViewerContext/ViewerContext';

class Dashboard extends React.Component {
  componentDidMount() {
    alert('Welcome to dashboard!');
  }
  componentWillUnmount() {
    alert('Navigating away from dashboard');
  }
  render() {
    return (
      <ViewerConsumer>
        {({ viewer }) => {
          if (!viewer) {
            return <Redirect to="/" />;
          }
          return (
            <Paper>
              <h1>Dashboard</h1>
              <Row>Welcome {viewer.email}!</Row>
            </Paper>
          );
        }}
      </ViewerConsumer>
    );
  }
}

export default Dashboard;
