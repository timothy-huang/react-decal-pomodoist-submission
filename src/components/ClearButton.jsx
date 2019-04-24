import React from 'react';
import { ReactComponent as Archive } from '../icons/archive.svg';

function ClearButton({ onClick }) {
  return (
    <button className="clear-button" type="button" onClick={onClick}>
      <Archive />
    </button>
  );
}

export default ClearButton;
