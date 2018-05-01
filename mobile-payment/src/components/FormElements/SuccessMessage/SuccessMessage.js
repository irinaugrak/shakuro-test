import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import './SuccessMessage.css';

const SuccessMessage = ({submittedData}) =>
  <div className='form__success-message'>
    <p className='form__success-message-text'>Успешно отправлены данные:</p>
    <p className='form__success-message-data'>{JSON.stringify(submittedData)}</p>
    <Link to='/' className='form__success-message-link'>На главную страницу</Link>
  </div>;

export default SuccessMessage;

SuccessMessage.propTypes = {
  submittedData: PropTypes.object.isRequired
};