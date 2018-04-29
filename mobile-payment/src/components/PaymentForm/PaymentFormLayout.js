import React, {PureComponent} from 'react';
import {Field, reduxForm} from 'redux-form'

import InputElement from '../FormElements/InputElement';
import InputPhoneElement from '../FormElements/InputPhoneElement';
import {phoneStrClear} from "../../utils/formFunctions";

const betweenThan = (min, max) => (value, previousValue) => parseInt(value, 10) < min || parseInt(value, 10) > max ? previousValue : value;

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
    const {handleSubmit, onAmountKeyPress} = this.props;

    return (
      <div className="mobile-payment__pay">
        <div className="mobile-payment__pay-wrapper">
          <form
            className="form"
            onSubmit={handleSubmit}
          >
            <Field
              component={InputElement}
              type="text"
              name="operator"
              label="Оператор"
              format={value => value ? value.label : ''}
              disabled
            />
            <Field
              component={InputPhoneElement}
              type="text"
              name="phone"
              label="Номер телефона"
            />
            <Field
              component={InputElement}
              type="text"
              name="amount"
              label="Сумма платежа"
              onKeyPress={onAmountKeyPress}
              normalize={betweenThan(1, 1000)}
            />
            <button className="form__submit" type="submit">Оплатить</button>
          </form>
        </div>
      </div>
    )
  }
}

export default reduxForm({
  form: 'paymentForm',
  validate
})(PaymentFormLayout)