import React from 'react';
import { Repayments } from './repayments.js';

const RepaymentsContainer = (props) => {
  const repaymentElement = (checked, id, money, year) => {
    return (
      <Repayments
        checked={checked}
        id={id}
        key={id}
        money={money}
        year={year}
      />
    );
  }

  const taxDeduction = props.deduction.formula(props.salary).toFixed(props.deduction.fractional);
  const equalAmounts = Math.floor(props.deduction.maxValue / taxDeduction);

  if (equalAmounts === 0) {
    return repaymentElement(true, 0, props.deduction.maxValue, props.vocabulary[0]);
  }

  const rest = (props.deduction.maxValue % taxDeduction).toFixed(props.deduction.fractional);
  const equalParts = [];
  for (let i = 1; i <= equalAmounts; i++) {
    equalParts.push(repaymentElement(true, i, taxDeduction, props.vocabulary[i]));
  }
  equalParts.push(repaymentElement(false, equalAmounts + 1, rest, props.vocabulary[equalAmounts + 1]));
  return (
    <>
      {equalParts}
    </>
  );
}

export { RepaymentsContainer }
