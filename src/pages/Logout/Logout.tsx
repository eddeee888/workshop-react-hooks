import React from 'react';
import { Redirect } from 'react-router';
import { ViewerConsumer } from 'src/common/components/ViewerContext/ViewerContext';

const Logout: React.FunctionComponent = () => (
  <ViewerConsumer>
    {({ clearViewer }) => {
      clearViewer();
      return <Redirect to="/" />;
    }}
  </ViewerConsumer>
);

export default Logout;
