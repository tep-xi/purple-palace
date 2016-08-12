import Contact from './Contact.js';
import Gospel from './Gospel.js';
import Rush from './Rush.js';
import Tour from './Tour.js';
import Home from './Home.js';
import Header from './Header.js';
import Footer from './Footer.js';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

render((
  <div>
    <Header/>
    <BrowserRouter>
      <Switch>
        <Route path="/contact" component={Contact}/>
        <Route path="/rush" component={Rush}/>
        <Route path="/the-gospel/" component={Gospel}/>
        <Route path="/tour" component={Tour}/>
        <Route path="*" component={Home}/>
      </Switch>
    </BrowserRouter>
    <Footer/>
  </div>
), document.getElementById('root'));
