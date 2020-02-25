import React from 'react';

import './config/reactotronConfig';

import StatusBar from './styles/StatusBar';
import Routes from './routes';

const App = () => {
  return (
    <>
      <Routes />
      <StatusBar />
    </>
  );
};

export default App;
