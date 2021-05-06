import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthBlock from './containers/AuthBlock/AuthBlock';

const App = () => {

  return (
    <BrowserRouter>
      <AuthBlock />
    </BrowserRouter>
  );
}

export default App;
