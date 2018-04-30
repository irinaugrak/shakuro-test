import React, {Component} from 'react';
import {withRouter, Switch, Route} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from "react-transition-group";

import OperatorForm from '../OperatorForm';
import PaymentForm from '../PaymentForm';
import NotFound from '../NotFound';

import './App.css';

class App extends Component {
  render() {
    const location = this.props.history.location;

    return (
      <div className="mobile-payment">
        <TransitionGroup className="mobile-payment__wrapper">
          <CSSTransition key={location.key} classNames="fade" timeout={400}>
            <Switch location={location}>
              <Route exact path="/" component={OperatorForm} />
              <Route path="/pay" component={PaymentForm} />
              <Route component={NotFound} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default withRouter(App);
