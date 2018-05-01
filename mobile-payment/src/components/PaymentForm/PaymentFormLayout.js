import React, {PureComponent} from 'react';
import {Field, reduxForm} from 'redux-form';
import ReactSVG from 'react-svg';
import {CSSTransition} from 'react-transition-group';
import PropTypes from 'prop-types';

import InputElement from '../FormElements/InputElement';
import InputPhoneElement from '../FormElements/InputPhoneElement';
import SuccessMessage from '../FormElements/SuccessMessage';
import ErrorMessage from '../FormElements/ErrorMessage';
import {phoneStrClear} from '../../utils/formFunctions';

import form_back_img from '../../assets/images/form-back.svg';

export const amountNormalize = (min, max) => (value, previousValue) => {

  if (!(/^\d+$/).test(value) && value !== '') {
    return previousValue;
  }

  if (parseInt(value, 10) < min || parseInt(value, 10) > max) {
    return previousValue;
  }

  return value;
};

const validate = values => {
  const errors = {};
  const errorsMessages = {
    required: 'Обязательное поле',
    badPhoneFormat: 'Неверный формат номера телефона'
  };

  if (!values.phone) {
    errors.phone = errorsMessages.required;

  } else if (phoneStrClear(values.phone).length < 11) {
    errors.phone = errorsMessages.badPhoneFormat;
  }

  if (!values.amount) {
    errors.amount = errorsMessages.required;
  }

  return errors;
};

class PaymentFormLayout extends PureComponent {

  componentDidMount() {
    this.props.initialize({operator: this.props.selectedOperator});
  }

  render() {
    const {
        handleSubmit,
        onPaymentFormBackClick,
        isDataLoading,
        submittedData,
        isDataSubmitError,
        onPaymentFormErrorMessageCloseClick
      } = this.props;
    const mobilePaymentPayWrapper =
      isDataLoading ?
      <div className='mobile-payment__pay-wrapper mobile-payment__pay-wrapper--loading'>
        <div className='spinner'/>
      </div>
      :
      submittedData ?
        <div className='mobile-payment__pay-wrapper'>
          <SuccessMessage submittedData={submittedData}/>
        </div>
        :
        isDataSubmitError ?
          <div className='mobile-payment__pay-wrapper'>
            <ErrorMessage onFormErrorMessageCloseClick={onPaymentFormErrorMessageCloseClick}/>
          </div>
          :
          <div className='mobile-payment__pay-wrapper'>
            <ReactSVG
              path={form_back_img}
              className='form__back'
              style={{
                width: 24,
                height: 16
              }}
              onClick={onPaymentFormBackClick}
            />
            <form
              className='form'
              onSubmit={handleSubmit}
            >
              <Field
                component={InputElement}
                type='text'
                name='operator'
                label='Оператор'
                format={value => value ? value.label : ''}
                disabled
              />
              <Field
                component={InputPhoneElement}
                type='text'
                name='phone'
                label='Номер телефона'
              />
              <Field
                component={InputElement}
                type='text'
                name='amount'
                label='Сумма платежа (до 1000 рублей)'
                normalize={amountNormalize(1, 1000)}
              />
              <button className='form__submit' type='submit'>Оплатить</button>
            </form>
          </div>;

    return (
      <div className='mobile-payment__pay'>
        <CSSTransition
          timeout={400}
          classNames='fade'
          in={submittedData !== null || isDataSubmitError !== false}
        >
          {mobilePaymentPayWrapper}
        </CSSTransition>
      </div>
    )
  }
}

export default reduxForm({
  form: 'paymentForm',
  validate
})(PaymentFormLayout);

PaymentFormLayout.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onPaymentFormBackClick: PropTypes.func.isRequired,
  isDataLoading: PropTypes.bool.isRequired,
  submittedData: PropTypes.object,
  isDataSubmitError: PropTypes.bool.isRequired,
  onPaymentFormErrorMessageCloseClick: PropTypes.func.isRequired
};