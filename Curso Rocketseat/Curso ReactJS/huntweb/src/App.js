import React from 'react';

import './style.css';

import Header from './components/Header/index';
import Main from './pages/main/index';

import Routes from './routes';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
};

export default App;
