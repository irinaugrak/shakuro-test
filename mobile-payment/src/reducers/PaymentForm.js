import {paymentFormConstants} from '../constants';

export const payment = (state = {
  submittedData: null,
  isDataLoading: false,
  isDataSubmitError: false
}, action) => {
  switch (action.type) {
    case paymentFormConstants.PAYMENT_FORM_SUBMITTED_SUCCESS:
      return {
        ...state,
        submittedData: action.payload,
        isDataLoading: false,
        isDataSubmitError: false
      };
    case paymentFormConstants.PAYMENT_FORM_SUBMITTED_LOADING:
      return {
        ...state,
        submittedData: null,
        isDataLoading: true,
        isDataSubmitError: false
      };
    case paymentFormConstants.PAYMENT_FORM_SUBMITTED_FAILURE:
      return {
        ...state,
        submittedData: null,
        isDataLoading: false,
        isDataSubmitError: true
      };
    case paymentFormConstants.PAYMENT_FORM_DATA_CLEAR:
      return {
        ...state,
        submittedData: null
      };
    case paymentFormConstants.PAYMENT_FORM_ERROR_MESSAGE_CLOSE:
      return {
        ...state,
        isDataSubmitError: false
      };
    default:
      return state;
  }
};