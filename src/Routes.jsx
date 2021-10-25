import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Product from './components/Product';
import Products from './components/Products';
import Register from './components/Register';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/product' component={Product} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/checkout' component={Checkout} />
        <Route>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
