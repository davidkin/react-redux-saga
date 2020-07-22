import React from 'react';
import './index.scss';
import Main from './pages/Main/Main';
import { Provider } from 'react-redux';
import configureStore from './store/store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
