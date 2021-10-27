import React from 'react';
import { RepaymentsContainer } from './repaymentsContainer.js';

const CalculatedRepayment = (props) => {
  return (
    <div className='popup__repayment-wrapper'>
      <p className='popup__text popup__text--repayment'>
        {props.repayments}
      </p>
      <ul className='popup__repayments-list'>
        <RepaymentsContainer
          deduction={props.deduction}
          salary={props.salary}
          vocabulary={props.vocabulary} />
      </ul>
    </div>
  );
}

export { CalculatedRepayment }
