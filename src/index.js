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
import References from './components/References';
import Contact from './components/Contact';


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <App>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/About' component={About}/>
          <Route path='/Portfolio' component={Portfolio}/>
          <Route path='/Contact' component={Contact}/>
          <Route path='/References' component={References}/>
        </Switch>
      </App>
    </BaseLayout>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
