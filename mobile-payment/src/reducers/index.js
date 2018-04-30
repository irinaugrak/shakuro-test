import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import {operator} from "./OperatorForm";
import {payment} from "./PaymentForm";

export const rootReducer = combineReducers({
  operator,
  payment,
  form: formReducer
});
