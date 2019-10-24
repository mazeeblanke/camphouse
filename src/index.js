import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import App from './App';
import '../scss/app.scss';

import { loadableReady } from '@loadable/component'

const renderAppWithRouter = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
} 

let AppWithRouter = hot(renderAppWithRouter)


loadableReady(() => {
  ReactDOM.hydrate(<AppWithRouter />, document.getElementById('root'))
});