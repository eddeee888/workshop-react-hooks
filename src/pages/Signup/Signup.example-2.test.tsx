import { mount } from 'enzyme';
import React, { useContext } from 'react';
import { StaticRouter } from 'react-router';
import UsersContext, {
  UsersProvider
} from 'src/common/components/UsersContext/UsersContext';
import ViewerContext, {
  ViewerProvider
} from 'src/common/components/ViewerContext/ViewerContext';
import Signup from './Signup.example-2';

describe('<Signup />', () => {
  it('should update email and password as we type', () => {
    const wrapper = mount(<Signup />);

    wrapper
      .find(`input[name='email']`)
      .simulate('change', { target: { value: 'test@gmail.com' } });
    wrapper
      .find(`input[name='password']`)
      .simulate('change', { target: { value: 'password' } });

    expect(wrapper.find(`input[name='email']`).props().value).toBe(
      'test@gmail.com'
    );
    expect(wrapper.find(`input[name='password']`).props().value).toBe(
      'password'
    );
  });

  it('should register new user and log in as that user', () => {
    const TestComponent: React.FunctionComponent = () => {
      const { viewer } = useContext(ViewerContext);
      const { users } = useContext(UsersContext);

      return (
        <>
          <div id="viewer">{viewer ? viewer.email : ''}</div>
          <div id="users">
            {viewer
              ? `${users[viewer.email].email} ${users[viewer.email].password}`
              : ''}
          </div>
        </>
      );
    };

    const wrapper = mount(
      <StaticRouter context={{}}>
        <ViewerProvider>
          <UsersProvider>
            <Signup />
            <TestComponent />
          </UsersProvider>
        </ViewerProvider>
      </StaticRouter>
    );

    wrapper
      .find(`input[name='email']`)
      .simulate('change', { target: { value: 'test@gmail.com' } });
    wrapper
      .find(`input[name='password']`)
      .simulate('change', { target: { value: 'password' } });
    wrapper.find('button').simulate('click');

    expect(wrapper.find('#viewer').text()).toBe('test@gmail.com');
    expect(wrapper.find('#users').text()).toBe('test@gmail.com password');
  });
});
