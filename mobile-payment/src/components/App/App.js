import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import OperatorForm from '../OperatorForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="mobile-payment">
        <Switch>
          <Route exact path="/" component={OperatorForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
