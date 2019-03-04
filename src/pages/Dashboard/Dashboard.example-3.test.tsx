/**
 * `useEffects` tests is a bit harder to test.
 * The function passed to useEffect fires after layout and paint, during a deferred event.
 * This means in jest, we cannot easily capture when it's fired
 *
 * Reference:
 * https://reactjs.org/docs/hooks-reference.html#timing-of-effects
 *
 * See discussion:
 * https://github.com/kentcdodds/react-testing-library/issues/215
 *
 * Sample implementation:
 * https://github.com/threepointone/react-act-examples/blob/master/act-examples.test.js
 */

const ReactDOM = require('react-dom');
import React from 'react';
import { StaticRouter } from 'react-router';
import { UsersProvider } from 'src/common/components/UsersContext/UsersContext';
import { ViewerProvider } from 'src/common/components/ViewerContext/ViewerContext';
import Dashboard from './Dashboard.example-3';

const { act } = require('react-dom/test-utils');

describe('<Dashboard />', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });
  it('should alert when mounted', () => {
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const el = document.createElement('div');
    act(() => {
      ReactDOM.render(
        <StaticRouter context={{}}>
          <ViewerProvider>
            <UsersProvider>
              <Dashboard />
            </UsersProvider>
          </ViewerProvider>
        </StaticRouter>,
        el
      );
    });

    expect(alertSpy).toHaveBeenCalledTimes(1);
  });
});
