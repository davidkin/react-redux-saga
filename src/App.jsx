import React from 'react';
import './index.scss';
import ImageState from './context/images/ImageState';
import Main from './pages/Main/Main';

const App = () => (
  <ImageState>
    <Main />
  </ImageState>
);

export default App;
