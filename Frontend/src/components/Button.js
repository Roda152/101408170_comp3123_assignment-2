import React from 'react';

const Button = ({ text, onClick, styleType }) => {
  return (
    <button className={`btn ${styleType}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
