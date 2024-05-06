
import { useState } from "react";
import Input from "./Input";
import Input2 from "./Input2";

const Button = (handleInput,secondInput) => {

  const[btn, setBtn] = useState()
  const calculateBtn = () => {
 

    function calculateTip() {
      
    let amount =  handleInput(parseFloat(bill.value));
    let percentage =  secondInput(parseFloat(percent.value));
  
  btn = (amount * percentage) / 100;

 
      setBtn(`$ ${btn}`);  
    }

    calculateTip;

  }

  return (
    <div>
    <button onClick={calculateBtn}
        className=" bg-green-500 hover:bg-green-900 ... mx-auto
        px-5 sm:px-10 md:px-2 lg:px-24 xl:px-48 ms-20 py-2 
        mb-4 text-white font-bold text-lg"
     >Calculate</button>
      <p className=" font-semibold text-lg">Total:
        <b className="text-2xl font-bold"> 0.00</b>
    </p>
  </div>
  )
}

export default Button
