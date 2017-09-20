import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import BaseLayout from './components/Layout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <App>
        <Switch>
          <Route path='/About' component={About}/>
          <Route path='/Portfolio' component={Portfolio}/>
          <Route path='/' component={Home}/>
        </Switch>
      </App>  
    </BaseLayout>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
