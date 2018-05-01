import React from 'react';

import './InputElement.css';

const InputElement = ({input, label, type, disabled, meta: {touched, error, valid}}) =>
  <div className='form__field'>
    {label ? <label className='form__field-label'>{label}</label> : null}
    <div className='form__field-input-item'>
      <input
        className={
          touched && error ?
            'form__field-input form__field-input--error'
            :
            touched && valid ?
              'form__field-input form__field-input--success'
              :
              'form__field-input'
        }
        {...input}
        type={type}
        disabled={disabled ? disabled : false}
      />
      {touched && error && <span className='form__field-input-error'>{error}</span>}
    </div>
  </div>;

export default InputElement;