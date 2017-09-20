import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BaseLayout from './components/BaseLayout';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
