import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Display from '../components/display';
import store from '../redux/configureStore';

describe('Home component testing', () => {
  test('Does the Home component match snapshot', () => {
    const home = render(
      <BrowserRouter>
        <Provider store={store}>
          <Display />
        </Provider>
      </BrowserRouter>,
    );
    expect(home).toMatchSnapshot();
  });
});
