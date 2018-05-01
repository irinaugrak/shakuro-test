import React from 'react';
import PropTypes from 'prop-types';

import './ErrorMessage.css';

const ErrorMessage = ({onFormErrorMessageCloseClick}) =>
  <div className='form__error-message'>
    <p className='form__error-message-text'>Ваш платеж не прошел</p>
    <p
      className='form__error-message-one-more'
      onClick={onFormErrorMessageCloseClick}
    >
      Попробовать снова
    </p>
  </div>;

export default ErrorMessage;

ErrorMessage.propTypes = {
  onFormErrorMessageCloseClick: PropTypes.func.isRequired
};