import { useState } from "react";


const Input2 = () => {

  const [percent, setPercent] = useState("");

  const secondInput = (event) => {
    setPercent(event.target.valueAsNumber) 
    if (setPercent < 0 || !setPercent) {
      alert("enter positive value for tip percentage");
      setPercent.value = "";
      percent = false;
    }
  
    if (setPercent > 100 || !setPercent) {
      alert("please enter number less than 100");
      setPercent.value = "";
      percent = false;
    }
    percent = true;
    if (percent === true) {
      enableCalculateButton();
    }

}

  return (
      <>
      <div className="mb-4">
          <label className="block">
            <span className="block text-base font-semibold ms-3 opacity-75">Tip percentage:</span>
          <input onKeyUp={secondInput} type="number" className=" px-5 sm:px-10 md:px-2 
                 lg:px-24 xl:px-48
                py-2 border-2 border-dark-600 ... ms-3"
              name="percent" />
          </label>
        </div>
      </>
  )
}

export default Input2
