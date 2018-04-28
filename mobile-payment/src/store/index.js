import {createStore, applyMiddleware} from 'redux';
import {operator} from "../reducers/OperatorForm";
import thunk from 'redux-thunk';


export const store = createStore(
  operator,
  applyMiddleware(thunk)
);
