import React from 'react';
import './App.css';
import Img from './components/Img/Img';
import { srcHQ, srcLQ } from './utils/imageURLs';

function App() {
  return (
    <div className="App">
      <div className="image-container">
        <Img srcLQ={srcLQ} srcHQ={srcHQ} />
      </div>
    </div>
  );
}

export default App;
