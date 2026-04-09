import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  let addValue = () => {
    console.log("clicked", counter);

    counter++;
    setCounter(counter);
  };
  return (
    <>
      <h1>Chai Aur Code</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button>remove value {counter}</button>
    </>
  );
}

export default App;
