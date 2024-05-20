import React, { useState } from "react";
import Test from "./components/Test";

const App = () => {
  let [count, setcount] = useState(0);

  const [color, setcolor] = useState("red");
  const [size, setsize] = useState("300px");
  const [height, setheight] = useState("200px");

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setcount(count + 1)}>+</button>
      <button onClick={() => setcount(count - 1)}>-</button>

      <div
        style={{ backgroundColor: `${color}`, width: `${size}`, height: `${height}` }}
      ></div>
      <button onClick={() =>{ setcolor("blue")}}>Change</button> 
      <button onClick={() =>{ setsize("500px")}}>Change</button> 
      <button onClick={() =>{ setheight("500px")}}>Change</button> 
      <Test />
    </div>
  );
};

export default App;
