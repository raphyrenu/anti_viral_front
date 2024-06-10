// App.js

import React from 'react';
import Backgound from './components/Backgound';

import Header from './pages/Header';
import Main from './pages/Main';




const App = () => {
  return (
    <div>
      <Backgound />
      <Header />
      <Main/>
      
    </div>
  );
};

export default App;
