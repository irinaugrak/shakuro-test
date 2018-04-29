import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import OperatorForm from '../OperatorForm';
import PaymentForm from '../PaymentForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="mobile-payment">
        <Switch>
          <Route exact path="/" component={OperatorForm} />
          <Route exact path="/pay" component={PaymentForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
