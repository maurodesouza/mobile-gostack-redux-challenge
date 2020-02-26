import React from 'react';

import { Provider } from 'react-redux';

import './config/reactotronConfig';

import store from './store';
import StatusBar from './styles/StatusBar';
import Routes from './routes';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
      <StatusBar />
    </Provider>
  );
};

export default App;
