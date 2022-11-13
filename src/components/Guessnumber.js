import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Greeting from './Greeting';

const Guessnumber = (props) => {

  const [num, setnum] = useState("");
  const [fl, setFl] = useState(false)
  const [guess, setGuess] = useState(0);

  const checked = () => {
    setGuess(guess + 1);
    const flg = props.Check(num);
    setFl(flg)
  };

  if (fl) {
    const show = setTimeout(() => {
      setFl(false)
      setnum("")
      setGuess(0)
    }, 5000);
  }

  return (
    <> 
    <div className={`container card text-center my-3 ${fl ? "myMain" : ""}`} style={{ width: "50%", }}>
      <h1 className='card-header text-light bg-dark'> ~ Guess Number {props.rendomnum}~</h1>
      <div className='card-body'>
        <input className='card form-control' type="text" value={num} onChange={(e) => setnum(e.target.value)} />
        <button className="btn btn-outline-secondary mx-3 my-3" onClick={checked}>Check</button>
        <a href="/">Refresh</a>
      </div>
    </div>
      {fl && <Greeting Guess={guess} />}
    </>

  )
}

export default Guessnumber
