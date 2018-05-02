import React from 'react';
import {reduxForm} from 'redux-form';
import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import PaymentFormLayout from './PaymentFormLayout';
import {amountNormalize} from "./PaymentFormLayout";

const func = jest.fn();

const setPaymentFormLayoutParams = params => {

  return {
    isDataLoading: params.isDataLoading,
    isDataSubmitError: params.isDataSubmitError,
    submittedData: params.submittedData,
    onPaymentFormErrorMessageCloseClick: func,
    onPaymentFormBackClick: func
  }
};

const PaymentFormLayoutTestCaseCreate = testCase => {
  const store = createStore(() => ({}));
  const DecoratedPaymentFormLayout = reduxForm({form: 'paymentForm'})(PaymentFormLayout);
  const params = setPaymentFormLayoutParams(testCase);
  const element = renderer
    .create(
      <Provider store={store}>
        <MemoryRouter>
          <DecoratedPaymentFormLayout
            {...params}
          />
        </MemoryRouter>
      </Provider>
    )
    .toJSON();

  expect(element).toMatchSnapshot();
};

it('renders PaymentFormLayout correctly', () => {
  const testCases = [
    {
      isDataLoading: true,
      submittedData: null,
      isDataSubmitError: false
    },
    {
      isDataLoading: false,
      submittedData: null,
      isDataSubmitError: true
    },
    {
      isDataLoading: false,
      submittedData: {testData: 'testData'},
      isDataSubmitError: false
    },
    {
      isDataLoading: false,
      submittedData: null,
      isDataSubmitError: false
    }
  ];

  testCases.map(item => {
    PaymentFormLayoutTestCaseCreate(item);
  });
});

it('testing amount validation from PaymentFormLayout', () => {
  expect(amountNormalize(1, 1000)('10001', '1000')).toEqual('1000');
  expect(amountNormalize(1, 1000)('10000', '')).toEqual('');
  expect(amountNormalize(1, 1000)('10a', '10')).toEqual('10');
  expect(amountNormalize(1, 1000)('112', '11')).toEqual('112');
});


