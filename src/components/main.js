import React, { useState } from 'react';
import { PopUp } from './popUp.js';

const Main = (props) => {
  const [popUpIsOpen, popUpIsOpenUpdater] = useState(props.state.popupIsOpen);

  const controlModal = () => {
    popUpIsOpenUpdater(!popUpIsOpen);
  }

  return (
    <main className={popUpIsOpen ? 'calculation calculation--opened' : 'calculation'}>
      <h1 className='visually-hidden'>{props.state.firstHeader}</h1>
      <section className='calculation__wrapper'>
        <h2 className='visually-hidden'>{props.state.secondHeader}</h2>
        {!popUpIsOpen && (<button type='button' className='calculation__show-popup' onClick={controlModal}>
          {props.state.calculationText}
        </button>)}
        {popUpIsOpen && <PopUp closeModal={controlModal} state={props.state.popUp}/>}
      </section>
    </main>
  );
}

export { Main }
