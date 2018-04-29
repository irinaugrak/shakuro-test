import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

//import * as operatorFormActions from '../../actions/OperatorForm';
import PaymentFormLayout from './PaymentFormLayout';
import {inputNumbersOnly, phoneStrClear} from "../../utils/formFunctions";

import './PaymentForm.css';

class PaymentForm extends Component {

  _amountKeyPressHandler = e => {

    if (!inputNumbersOnly(e)) {
      e.preventDefault();
    }
  };

  _submitForm = values => {
    console.log(values);
  };

  render() {
    const {selectedOperator} = this.props;

    return (
      selectedOperator ?
        <PaymentFormLayout
          selectedOperator={selectedOperator}
          onAmountKeyPress={this._amountKeyPressHandler}
          onSubmit={this._submitForm}
        />
        :
        <Redirect to="/" />
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedOperator: state.operator.selectedOperator
  }
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(mapStateToProps)(PaymentForm)