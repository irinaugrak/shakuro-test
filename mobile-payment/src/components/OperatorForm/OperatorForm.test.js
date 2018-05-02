import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';

import OperatorFormLayout from './OperatorFormLayout';

const func = jest.fn();

const setOperatorFormLayoutParams = params => (
  {
    operatorsList: params.operatorsList,
    selectedOperator: params.selectedOperator,
    isOperatorsListLoading: params.isOperatorsListLoading,
    isOperatorsListError: params.isOperatorsListError,
    onOperatorFormSubmit: func,
    onOperatorFormRefreshClick: func,
    onSelectChange: func
  }
);

const OperatorFormLayoutTestCaseCreate = testCase => {
  const params = setOperatorFormLayoutParams(testCase);
  const element = renderer
    .create(
      <MemoryRouter>
        <OperatorFormLayout
          {...params}
        />
      </MemoryRouter>
    )
    .toJSON();

  expect(element).toMatchSnapshot();
};

it('renders OperatorFormLayout correctly', () => {
  const testCases = [
    {
      operatorsList: null,
      selectedOperator: null,
      isOperatorsListLoading: true,
      isOperatorsListError: false
    },
    {
      operatorsList: [{value: 1, label: 'Мегафон'}],
      selectedOperator: {value: 1, label: 'Мегафон'},
      isOperatorsListLoading: false,
      isOperatorsListError: false
    },
    {
      operatorsList: [{value: 1, label: 'Мегафон'}],
      selectedOperator: null,
      isOperatorsListLoading: false,
      isOperatorsListError: false
    },
    {
      operatorsList: null,
      selectedOperator: null,
      isOperatorsListLoading: false,
      isOperatorsListError: true
    }
  ];

  testCases.map(item => {
    OperatorFormLayoutTestCaseCreate(item);
  });
});