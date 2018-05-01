import React from 'react';
import Select from 'react-select';
import ReactSVG from 'react-svg';
import PropTypes from 'prop-types';

import refresh_img from '../../assets/images/refresh.svg';

const OperatorFormLayout = ({
                              operatorsList,
                              isOperatorsListLoading,
                              isOperatorsListError,
                              selectedOperator,
                              onSelectChange,
                              onOperatorFormSubmit,
                              onOperatorFormRefreshClick
                            }) => {
  const operatorForm =
    isOperatorsListLoading ?
      <div className='spinner'/>
      :
      isOperatorsListError ?
        <div className='mobile-payment__operator-form-error'>
          <p className='mobile-payment__operator-form-error-text'>Что-то пошло не так. Пожалуйста, обновите
            страницу.</p>
          <ReactSVG
            path={refresh_img}
            className='mobile-payment__operator-form-error-refresh-img'
            style={{
              width: 50,
              height: 50
            }}
            onClick={onOperatorFormRefreshClick}
          />
        </div>
        :
        <div className='mobile-payment__operator-form'>
          <p className='mobile-payment__operator-legend'>Выберите оператора для того, чтобы перейти к форме
            оплаты</p>
          <Select
            value={selectedOperator}
            options={operatorsList}
            onChange={onSelectChange}
            noResultsText='Нет результатов'
            placeholder='Выберите оператора'
          />
          <a
            onClick={selectedOperator ? onOperatorFormSubmit : e => e.preventDefault()}
            className={
              selectedOperator ?
                'mobile-payment__operator-to-pay'
                :
                'mobile-payment__operator-to-pay mobile-payment__operator-to-pay--disabled'
            }
          >
            Перейти к оплате
          </a>
        </div>;

  return (
    <div className='mobile-payment__operator'>
      <div className='mobile-payment__operator-wrapper'>
        {operatorForm}
      </div>
    </div>
  )
};

export default OperatorFormLayout;

OperatorFormLayout.propTypes = {
  operatorsList: PropTypes.array,
  isOperatorsListLoading: PropTypes.bool.isRequired,
  isOperatorsListError: PropTypes.bool.isRequired,
  selectedOperator: PropTypes.shape({
    value: PropTypes.number,
    label: PropTypes.string
  }),
  onSelectChange: PropTypes.func.isRequired,
  onOperatorFormSubmit: PropTypes.func.isRequired,
  onOperatorFormRefreshClick: PropTypes.func.isRequired
};