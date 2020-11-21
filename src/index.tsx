import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';


const rootNode = document.getElementById('root');

ReactDOM.render(

    <BrowserRouter basename='peachtree-bank'>
      <App />
    </BrowserRouter>,

    rootNode
);

