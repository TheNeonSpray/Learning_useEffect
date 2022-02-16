//useState is a function or "Hook" that handles and updates the state inside of a component
import { useState, useEffect } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [number, setNumber] = useState(0);

  //you tell React that your component needs to do something after render.

  /*componentDidUpdate
  (everytime that I want to re render)*/
  useEffect(() => {
    console.log("didUpdate Effect");
  });

  /*componentDidMount
  (when I want to call an API, or just a one time action)*/
  useEffect(() => {
    console.log("didMount Effect");
    //when this component stops their tasks, this 'return' will unmount the component. (clear intervals, timers, listeners)
    return()=>{
      console.log("willUnmount");
    }
  }, []);

  useEffect(() => {
    console.log("The input value or number has changed");
  }, [inputValue, number]);

  return (
    <div className="App">
      <input
        type="text"
        value={inputValue}
        onChange={({ target: { value } }) => setInputValue(value)}
      />
      <input
        type="text"
        age={number}
        onChange={({ target: { value } }) => setNumber(value)}
      />
    </div>
  );
}

export default App;
