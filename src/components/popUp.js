import React, { useState } from 'react';
import { CalculatedRepayment } from './calculatedRepayment.js';
import { SuccessMessage } from './successMessage.js';

const PopUp = (props) => {
  const [calculationIsOpen, calculationIsOpenUpdater] = useState(props.state.calculationIsOpen);
  const [salary, salaryUpdater] = useState(props.state.salaryState);
  const [discontState, discontStateUpdater] = useState(props.state.discontState);
  const [userAttention, userAttentionUpdater] = useState(props.state.userAttention);
  const [messageState, messageStateUpdater] = useState(props.state.messageState);

  const openCalculation = (e) => {
    if (salary < props.state.deduction.minValue) {
      userAttentionUpdater(true);
      return;
    }

    calculationIsOpenUpdater(!calculationIsOpen);
  }

  const salaryChange = (e) => {
    if (calculationIsOpen) {
      calculationIsOpenUpdater(false);
    }

    if (userAttention) {
      userAttentionUpdater(false);
    }

    salaryUpdater(e.target.value);
  }

  const discontChange = (e) => {
    const target = e.target;
    const newDiscountState = Object.create(null, Object.getOwnPropertyDescriptors(discontState));

    for (let prop in newDiscountState) {
      newDiscountState[prop] = false;
    }

    discontStateUpdater({...newDiscountState, [target.value]: true});
  }

  const showSuccessMessage = (e) => {
    e.preventDefault();
    if (!salary) {
      return;
    }
    messageStateUpdater(true);
    setTimeout(() => messageStateUpdater(false), props.state.messageTimer);
  }

  return (
    <div className={calculationIsOpen ? 'popup popup--calculation-enabled' : 'popup'}>
      <h3 className='popup__text popup__header'>
        {props.state.header}
      </h3>
      <p className='popup__text popup__annotation'>
        {props.state.about}
      </p>
      <form onSubmit={showSuccessMessage} className='popup__form' action='https://echo.somewhereelse.com/' method='post'>
        <label htmlFor='salary' className='popup__label'>
          {props.state.salaryInfo}
        </label>
        <input
          type='number'
          name='salary'
          id='salary'
          className={userAttention ? 'popup__salary-value popup__salary-value--attention' : 'popup__salary-value'}
          value={salary}
          placeholder={props.state.salaryPlaceholder}
          onChange={salaryChange}/>
          {userAttention && <p className='popup__user-attention'>{props.state.requiredField}</p>}
        <button
          type='button'
          className={calculationIsOpen ? 'popup__button popup__calculate popup__calculate--enabled' : 'popup__button popup__calculate'}
          onClick={openCalculation}>
          {props.state.calculate}
        </button>
        {calculationIsOpen && (
          <CalculatedRepayment
            deduction={props.state.deduction}
            vocabulary={props.state.vocabulary}
            salary={salary}
            repayments={props.state.totalEarlyRepayment} />
        )}
        <div className={calculationIsOpen ? 'popup__discont-wrapper popup__discont-wrapper--enabled' : 'popup__discont-wrapper'}>
          <p className='popup__text popup__discont-text'>
            {props.state.discontInfo}
          </p>
          <label className={discontState.payment ? 'popup__label popup__label--selected popup__label--discont' : 'popup__label popup__label--discont'}>
            {props.state.discontPayment}
            <input
              type='radio'
              name='discont'
              value='payment'
              className='visually-hidden'
              defaultChecked={discontState.payment}
              onClick={discontChange}
            />
          </label>
          <label className={discontState.time ? 'popup__label popup__label--selected popup__label--discont' : 'popup__label popup__label--discont'}>
            {props.state.discontTime}
            <input
              type='radio'
              name='discont'
              value='time'
              className='visually-hidden'
              defaultChecked={discontState.time}
              onClick={discontChange}
            />
          </label>
        </div>
        <button type='submit' className='popup__button popup__submit'>
          {props.state.submit}
        </button>
      </form>
      {messageState && <SuccessMessage message={props.state.successfulMessage}/>}
      <button type='button' className='popup__button popup__close-button' onClick={props.closeModal}>
        <span className='visually-hidden'>
          {props.state.close}
        </span>
      </button>
    </div>
  );
}

export { PopUp }
