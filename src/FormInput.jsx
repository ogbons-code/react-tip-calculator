import React from 'react'

function FormInput({ name, text, computeValue, validateInputs }) {
    return (
        <div className="mb-3">
            <label className="block">
                <span className="block text-base font-semibold ms-3 opacity-75">{text}:</span>
                <input type="number"
                    className=" px-5  sm:px-10 md:px-12 lg:px-36 xl:px-52 py-2 border-2 border-dark-600 ... ms-3"
                    id={name} name={name} onKeyUp={computeValue} onKeyPress={validateInputs} />
            </label>
        </div>
    )
}

export default FormInput