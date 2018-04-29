import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { operator } from "./OperatorForm";

export const rootReducer = combineReducers({
  operator,
  form: formReducer
});
