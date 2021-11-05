import React, {useState} from 'react';
import './input.css';


const Input = (props) => {
  const {nickname} = props;

  return (
      <input {...props} className="input"/>     
    )
  };
  

export default Input