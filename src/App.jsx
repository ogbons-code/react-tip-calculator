import { useState, useRef } from 'react'
import FormInput from './FormInput';
import Header from "./Header"


function App() {
  const [total, setTotal] = useState(0.00);
  const [amount, setAmount] = useState(0)
  const [percent, setPercent] = useState(0)

  const calculateBtn = useRef();


  const validateInputs = () => {
    if (amount <= 0 || percent <= 0) {
      calculateBtn.current.setAttribute("disabled", "");
      calculateBtn.current.style.backgroundColor = "gray";
    } else {
      calculateBtn.current.removeAttribute("disabled");
      calculateBtn.current.style.backgroundColor = "#07b007";
    }
  }

  const getPercent = (e) => {
    setPercent(e.target.value);

    //check that percent is not more than 100


    // if (percent >= 100) {
    //   alert("please enter number less than 100");
    // }
  }

  const getAmount = (e) => {
    setAmount(e.target.value);
  }

  const calculateTotal = () => {
    let mainTotal = (amount * percent) / 100;
    setTotal(mainTotal);
  }


  return (
    <div>
      <div className=" md:w-80 lg:w-1/2 xlg:w-1/2 mx-auto px-4 bg-gray-300
                        rounded-xl shadow-lg mt-10 pb-10">
        <Header />

        <FormInput
          name={'amount'}
          text={'Amount'}
          computeValue={getAmount}
          validateInputs={validateInputs}
        />

        <FormInput
          name={'percent'}
          text={'Tip Percentage'}
          computeValue={getPercent}
          validateInputs={validateInputs}
        />


        <div>
          <button className=" bg-green-500 hover:bg-green-900 ... mx-auto
               px-5  sm:px-10 md:px-12 lg:px-36 xl:px-52 ms-20 py-2 mb-4
               text-white font-bold text-lg" id="calc-btn" ref={calculateBtn}
            onClick={() => calculateTotal()} >Calculate</button>
          <p className="font-semibold text-lg">Total: <b id="bill-result"
            className="text-2xl font-bold"> {total}</b>
          </p>
        </div>
      </div>
    </div>
  )
}

export default App;

