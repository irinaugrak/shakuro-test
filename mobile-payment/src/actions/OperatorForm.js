import {operatorFormConstants} from "../constants";

const operators = [
  {value: 1, label: 'МТС'},
  {value: 2, label: 'Билайн'},
  {value: 3, label: 'Мегафон'}
];

const getOperatorListSuccess = data => ({
  type: operatorFormConstants.OPERATORS_LIST_LOADED_SUCCESS,
  payload: data
});

const getOperatorListFailure = () => ({
  type: operatorFormConstants.OPERATORS_LIST_LOADED_FAILURE
});

const getOperatorListLoading = () => ({
  type: operatorFormConstants.OPERATORS_LIST_LOADING
});

export const getOperatorsList = () => {
  return dispatch => {
    dispatch(getOperatorListLoading());
    setTimeout(() => dispatch(getOperatorListSuccess(operators)), 2000);
  }
};

export const selectOperator = data => ({
  type: operatorFormConstants.OPERATOR_SELECTED,
  payload: data
});

