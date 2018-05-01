import React, {PureComponent} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import * as paymentFormActions from '../../actions/PaymentForm';
import PaymentFormLayout from './PaymentFormLayout';

import './PaymentForm.css';

class PaymentForm extends PureComponent {

  componentDidMount() {

    if (!this.props.selectedOperator) {
      this.props.history.push('/');
    }
  }

  componentWillUnmount() {
    this.props.paymentFormActions.paymentFormDataClear();
  }

  _paymentFormSubmitHandler = values => {
    this.props.paymentFormActions.paymentFormSubmit(values);
  };

  _paymentFormBackClickHandler = () => {
    this.props.history.push('/');
  };

  _paymentFormErrorMessageCloseClickHandler = () => {
    this.props.paymentFormActions.paymentFormErrorMessageClose();
  };

  render() {
    const {selectedOperator, submittedData, isDataLoading, isDataSubmitError} = this.props;

    return (
      <PaymentFormLayout
        selectedOperator={selectedOperator}
        submittedData={submittedData}
        isDataLoading={isDataLoading}
        isDataSubmitError={isDataSubmitError}
        onSubmit={this._paymentFormSubmitHandler}
        onPaymentFormBackClick={this._paymentFormBackClickHandler}
        onPaymentFormErrorMessageCloseClick={this._paymentFormErrorMessageCloseClickHandler}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedOperator: state.operator.selectedOperator,
    isPaymentFormOpen: state.payment.isPaymentFormOpen,
    submittedData: state.payment.submittedData,
    isDataLoading: state.payment.isDataLoading,
    isDataSubmitError: state.payment.isDataSubmitError
  }
};

const mapDispatchToProps = dispatch => {
  return {
    paymentFormActions: bindActionCreators(paymentFormActions, dispatch)
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PaymentForm));