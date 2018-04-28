import React, { PureComponent } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';

export default class OperatorFormLayout extends PureComponent {

  render() {
    const {operatorsList, isOperatorsListLoading, isOperatorsListError, selectedOperator, onSelectChange} = this.props;

    return (
      <div className="mobile-payment__operator">
        <div className="mobile-payment__operator-wrapper">
          {isOperatorsListLoading ?
            <div className="spinner" />
            :
            <div className="mobile-payment__operator-form">
              <p className="mobile-payment__operator-legend">Выберите оператора для того, чтобы перейти к форме оплаты</p>
              <Select
                value={selectedOperator}
                options={operatorsList}
                onChange={onSelectChange}
                noResultsText="Нет результатов"
                placeholder="Выберите оператора"
              />
              <Link
                to="/"
                onClick={e => e.preventDefault()}
                className={selectedOperator ? "mobile-payment__operator-to-pay" : "mobile-payment__operator-to-pay mobile-payment__operator-to-pay--disabled"}>
                Перейти к оплате
              </Link>
            </div>
          }
        </div>
      </div>
    )
  }
}