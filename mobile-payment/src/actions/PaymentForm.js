import {paymentFormConstants} from '../constants';
import {randomize} from '../utils/randomize';

const paymentFormSubmitSuccess = data => ({
  type: paymentFormConstants.PAYMENT_FORM_SUBMITTED_SUCCESS,
  payload: data
});

const paymentFormSubmitFailure = () => ({
  type: paymentFormConstants.PAYMENT_FORM_SUBMITTED_FAILURE
});

const paymentFormSubmitLoading = () => ({
  type: paymentFormConstants.PAYMENT_FORM_SUBMITTED_LOADING
});

export const paymentFormSubmit = data => {
  return dispatch => {
    dispatch(paymentFormSubmitLoading());
    randomize() ?
      setTimeout(() => dispatch(paymentFormSubmitSuccess(data)), 2000)
      :
      setTimeout(() => dispatch(paymentFormSubmitFailure()), 2000);
  }
};

export const paymentFormDataClear = () => ({
  type: paymentFormConstants.PAYMENT_FORM_DATA_CLEAR
});

export const paymentFormErrorMessageClose = () => ({
  type: paymentFormConstants.PAYMENT_FORM_ERROR_MESSAGE_CLOSE
});

