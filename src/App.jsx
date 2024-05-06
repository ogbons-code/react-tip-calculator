
import Button from "./Button"
import Header from "./Header"
import Input from "./Input"
import Input2 from "./Input2"

function App() {

  return (
    <>
      <div className="w-80 sm:w-80 md:w-1/2  mx-auto px-4 bg-white rounded-xl shadow-lg mt-10 pb-10">
        <Header />
        <Input />
        <Input2 />
        <Button />
      </div>
    </>
  )
}

export default App

