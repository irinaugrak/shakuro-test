import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import * as operatorFormActions from '../../actions/OperatorForm';
import OperatorFormLayout from './OperatorFormLayout';

import 'react-select/dist/react-select.css';
import './OperatorForm.css';

class OperatorForm extends Component {

  componentDidMount() {

    if (!this.props.operatorsList) {
      this.props.operatorFormActions.getOperatorsList();
    }
  };

  _selectChangeHandler = data => {
    this.props.operatorFormActions.selectOperator(data);
  };

  _operatorFormSubmitHandler = () => {
    this.props.history.push("/pay");
  };

  _submitOperatorFormRefreshClickHandler = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <OperatorFormLayout
        operatorsList={this.props.operatorsList}
        isOperatorsListLoading={this.props.isOperatorsListLoading}
        isOperatorsListError={this.props.isOperatorsListError}
        selectedOperator={this.props.selectedOperator}
        onSelectChange={this._selectChangeHandler}
        onOperatorFormSubmit={this._operatorFormSubmitHandler}
        onOperatorFormRefreshClick={this._submitOperatorFormRefreshClickHandler}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OperatorForm));