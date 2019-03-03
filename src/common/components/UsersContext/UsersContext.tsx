import React from 'react';

interface User {
  email: string;
  password: string;
}

interface UserList {
  [key: string]: User;
}

type AddUserFn = (user: User) => void;

interface ContextProps {
  children: React.ReactNode;
}

interface ContextState {
  users: UserList | {};
}

interface ContextFunctions {
  addUser: AddUserFn;
}

type ContextVariables = ContextState & ContextFunctions;

const UsersContext = React.createContext<ContextVariables>({
  users: {},
  addUser: () => {}
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
          addUser: this.addUser
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
}

export default UsersContext;
export { UsersProvider, UsersConsumer };
