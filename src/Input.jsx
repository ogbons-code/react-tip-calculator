import { useState } from "react";
import Button from "./Button";


const Input = () => {


const[bill,setBill]= useState("")

  const handleInput = (event) => {
    setBill(event.target.valueAsNumber);
    if (setBill < 0 || !setBill) {
      alert("enter positive number for bill amount");
      setBill.value = "";
      bill = false;
      disableCalculateButton();
      clearResult();
      return;
    }
  
    bill = true;
    if (bill === true) {
      //enable calculate button
      enableCalculateButton();
    }
}
  return (
      <>
      <div className="mb-3">
          <label className="block">
            <span className="block text-base font-semibold ms-3 opacity-75">Amount:</span>
          <input onKeyUp={handleInput} type="number" className="px-5 sm:px-10 md:px-2 lg:px-24
              xl:px-48 
            py-2 border-2 border-dark-600 ... ms-3" name="amount" />
          </label>
        </div>

      </>
  )
}

export default Input;


/*

// Count component.

import { useState } from "react"

const Count = () => {

  const [count, setCount] = useState(0)
  
  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1>{ count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    
    
    </>
  )
}

export default Count;


// App component [MAIN COMPONENT]


import Count from "./Count"

const App = () => {
  return (
    <Count />
  )
}

export default App;





// ANOTHER EXAMPLE ADDING A STRING IN useState.

// COUNT COMPONENT.
/*
import { useState } from "react"

const Count = () => {

  const [username, setUsername] = useState("No Name Available")
  
  const changeName = () => {
    setUsername("Ogbons-Code")
  }

  return (
    <>
      <h1>{ username}</h1>
      <button onClick={changeName}>change name</button>
    </>
  )
}

export default Count;

// APP COMPONENT.

import Count from "./Count"


const App = () => {
  return (
    <>
    <Count />
    </>
  )
}

export default App

*/