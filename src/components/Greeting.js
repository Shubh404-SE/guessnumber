import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
  return (
    <div className='container card text-center my_cont'>
      <h1 className='card header'>You Won</h1>
      <h2 className='card text'>win in {props.Guess} attempts</h2>
    </div>
  ) 
}

export default Greeting
