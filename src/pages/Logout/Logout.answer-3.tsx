import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router';
import UsersContext from 'src/common/components/UsersContext';
import ViewerContext from 'src/common/components/ViewerContext/ViewerContext';

const Logout: React.FunctionComponent = () => {
  const { viewer, clearViewer } = useContext(ViewerContext);
  const { removeUser } = useContext(UsersContext);

  if (!viewer) {
    return <Redirect to="/" />;
  }

  useEffect(() => {
    clearViewer();
    alert(`Logging out from ${viewer.email}`);

    return () => {
      const deleteConfirmation = confirm(
        `Would you like to delete your account (${viewer.email}) as well?`
      );
      if (deleteConfirmation) {
        removeUser(viewer.email);
      }
    };
  });

  return <Redirect to="/" />;
};

export default Logout;
