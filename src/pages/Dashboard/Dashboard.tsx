import React from 'react';
import { Redirect } from 'react-router';
import Row from 'src/common/components/Row';
import { ViewerConsumer } from 'src/common/components/ViewerContext/ViewerContext';

class Dashboard extends React.Component<{}> {
  render() {
    return (
      <ViewerConsumer>
        {({ viewer }) => {
          if (!viewer) {
            return <Redirect to="/" />;
          }
          return <Row>Welcome {viewer.email}!</Row>;
        }}
      </ViewerConsumer>
    );
  }
}

export default Dashboard;
