import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as operatorFormActions from '../../actions/OperatorForm';
import OperatorFormLayout from './OperatorFormLayout';

import 'react-select/dist/react-select.css';
import './OperatorForm.css';

class OperatorForm extends Component {

  componentDidMount() {
    !this.props.operatorsList ? this.props.operatorFormActions.getOperatorsList() : null;
  };

  _selectChangeHandler = data => {
    this.props.operatorFormActions.selectOperator(data);
  };

  render() {
    return (
      <OperatorFormLayout
        operatorsList={this.props.operatorsList}
        isOperatorsListLoading={this.props.isOperatorsListLoading}
        isOperatorsListError={this.props.isOperatorsListError}
        selectedOperator={this.props.selectedOperator}
        onSelectChange={this._selectChangeHandler}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    operatorsList: state.operator.list,
    isOperatorsListLoading: state.operator.isListLoading,
    isOperatorsListError: state.operator.isListLoadError,
    selectedOperator: state.operator.selectedOperator
  }
};

const mapDispatchToProps = dispatch => {
  return {
    operatorFormActions: bindActionCreators(operatorFormActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(OperatorForm);