import { operatorFormConstants } from "../constants";

export const operator = (state = {
  list: null,
  isListLoading: false,
  isListLoadError: false,
  selectedOperator: null
}, action) => {
  switch (action.type) {
    case operatorFormConstants.OPERATORS_LIST_LOADED_SUCCESS:
      return {
        ...state,
        list: action.payload,
        isListLoading: false,
        isListLoadError: false
      };
    case operatorFormConstants.OPERATORS_LIST_LOADING:
      return {
        ...state,
        list: null,
        isListLoading: true,
        isListLoadError: false
      };
    case operatorFormConstants.OPERATORS_LIST_LOADED_FAILURE:
      return {
        ...state,
        list: null,
        isListLoading: false,
        isListLoadError: true
      };
    case operatorFormConstants.OPERATOR_SELECTED:
      return {
        ...state,
        selectedOperator: action.payload
      };
    default:
      return state;
  }
};