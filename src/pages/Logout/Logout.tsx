import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import ViewerContext from 'src/common/components/ViewerContext';

function  Logout() {
  const { clearViewer } = useContext(ViewerContext);

  clearViewer();

  return <Redirect to="/" />;
}

export default Logout;
