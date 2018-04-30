import React from 'react';
import MaskedInput from 'react-maskedinput';

const InputPhoneElement = ({input, label, type, disabled, meta: {touched, error, valid}}) =>
  <div className="form__field">
    {label ? <label className="form__field-label">{label}</label> : null}
    <div className="form__field-input-item">
      <MaskedInput
        className={touched && error ? "form__field-input form__field-input--error" : touched && valid ? "form__field-input form__field-input--success" : "form__field-input"}
        {...input}
        type={type}
        mask="+1 (111) 111-11-11"
        placeholder=""
      />
      {touched && error && <span className="form__field-input-error">{error}</span>}
    </div>
  </div>;

export default InputPhoneElement;