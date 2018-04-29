import React from 'react';

import './InputElement.css';

const InputElement = ({input, label, type, disabled, onKeyPress, meta: {touched, error}}) => (
  <div className="form__field">
    {label ? <label className="form__field-label">{label}</label> : null}
    <div className="form__field-input-item">
      <input
        className={touched && error ? "form__field-input form__field-input--error" : "form__field-input"}
        {...input}
        type={type}
        disabled={disabled ? disabled : false}
        onKeyPress={onKeyPress ? onKeyPress : null}
      />
      {touched && error && <span className="form__field-input-error">{error}</span>}
    </div>
  </div>
);

export default InputElement;