import React, { useState } from 'react';

const Repayments = (props) => {
  const [checkedState, checkedStateUpdater] = useState(props.checked);

  const onChange = () => {
    checkedStateUpdater(!checkedState);
  }

  return (
    <li className='popup__repayment-item'>
      <input type='checkbox' checked={checkedState} className='popup__repayment-checkbox visually-hidden' onChange={onChange} id={props.id}/>
      <label className='popup__repayment-label' htmlFor={props.id}>
        <p className='popup__text popup__text--amount'>
          {`${props.money} рублей `}
          <span className='popup__repayment-year'>
            {props.year}
          </span>
        </p>
      </label>
    </li>
  );
}

export { Repayments }
