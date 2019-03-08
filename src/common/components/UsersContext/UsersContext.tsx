import React from 'react';

interface User {
  email: string;
  password: string;
}

interface UserList {
  [key: string]: User;
}

export type AddUserFn = (user: User) => void;
export type RemoveUserFn = (email: string) => void;
export type CheckUserCredentialsFn = (
  email: string,
  password: string
) => boolean;

interface ContextProps {
  children: React.ReactNode;
}

interface ContextState {
  users: UserList;
}

interface ContextFunctions {
  addUser: AddUserFn;
  removeUser: RemoveUserFn;
  checkUserCredentials: CheckUserCredentialsFn;
}

type ContextVariables = ContextState & ContextFunctions;

const UsersContext = React.createContext<ContextVariables>({
  users: {},
  addUser: () => {},
  removeUser: () => {},
  checkUserCredentials: () => false
});

const UsersConsumer = UsersContext.Consumer;
const Provider = UsersContext.Provider;

class UsersProvider extends React.Component<ContextProps, ContextState> {
  state: ContextState = {
    users: {}
  };
  render() {
    return (
      <Provider
        value={{
          users: this.state.users,
          addUser: this.addUser,
          removeUser: this.removeUser,
          checkUserCredentials: this.checkUserCredentials
        }}
      >
        {this.props.children}
      </Provider>
    );
  }

  addUser: AddUserFn = user => {
    const newUsers: UserList = {
      ...this.state.users
    };
    newUsers[user.email] = user;

    this.setState({
      users: newUsers
    });
  }

  removeUser: RemoveUserFn = email => {
    if (this.state.users && this.state.users[email]) {
      const newUserList = { ...this.state.users };
      delete newUserList[email];
      this.setState({ users: newUserList });
    }
  }

  checkUserCredentials: CheckUserCredentialsFn = (email, password) => {
    const { users } = this.state;

    if (!users[email] || (users[email] && users[email].password !== password)) {
      return false;
    }

    return true;
  }
}

export default UsersContext;
export { UsersProvider, UsersConsumer };
