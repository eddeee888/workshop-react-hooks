import React, { useContext } from 'react';
import UsersContext from 'src/common/components/UsersContext';
import ViewerContext from 'src/common/components/ViewerContext';
import './Footer.css';

const Footer: React.FunctionComponent = () => {
  const { viewer } = useContext(ViewerContext);
  const { users } = useContext(UsersContext);

  const numberOfUsers = Object.keys(users).length;

  return (
    <footer>
      <div>
        {viewer && <>Logged in as {viewer.email}</>}
        {!viewer && <>Not logged in</>}
      </div>
      <div>
        {!numberOfUsers && <>No users signed up</>}
        {numberOfUsers > 0 &&
          Object.values(users).map(user => <div>{user.email}</div>)}
      </div>
    </footer>
  );
};

export default Footer;
