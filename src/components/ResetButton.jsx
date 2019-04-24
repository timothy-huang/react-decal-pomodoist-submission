import React from 'react';
import { ReactComponent as Cross } from '../icons/x.svg';

function ResetButton({ onClick }) {
  return (
    <button className="timer-button" type="button" onClick={onClick}>
      <Cross />
    </button>
  );
}

export default ResetButton;
