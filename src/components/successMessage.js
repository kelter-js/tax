import React from 'react';

const SuccessMessage = (props) => {
  return (
    <div className='popup__message-wrapper'>
      <p className='popup__message-text'>
        {props.message}
      </p>
    </div>
  );
}

export { SuccessMessage }
