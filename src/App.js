import React, { useState } from 'react';
import Alert from './Alert';
import Guessnumber from './components/Guessnumber';
import "./App.css"

let x = (Math.round((Math.random() * 100) + 1));

function App() {

  // show Alert
  const [alert, setalrt] = useState(null);
  const showAlert = (massage, type) => {
    setalrt({
      msg: massage,
      type: type
    });
    setTimeout(() => { setalrt(null) }, 3000)
  }
console.log(x);

  const check = (num) => {
    let n = Number(num);
    if (n > 100 || n < 1) {
      showAlert("please enter between 1 to 100", "danger")
      return false;
    }
    else if (n < x) {
      showAlert("Your number is too small to my guessed number", "primary")
      return false;
    }
    else if (n > x) {
      showAlert("number is larger", "primary")
      return false;
    }
    else if (n === x) {
      // showAlert("Correct Match", "success")
      return true;;
    }
  }

  return (
    <>
      <Alert alert={alert} />
      <Guessnumber Check={check} />
    </>
  );
}

export default App;