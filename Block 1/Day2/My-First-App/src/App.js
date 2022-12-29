// import React, { useState } from 'react';
// import './App.css';
// import { Comment } from './components/Comment'

// function App() {
//   const [number, setNumber] = useState(0);
//   return (
//     <div className="App">
//       <p>{number}</p>
//       <button
//       onClick={() => {
//         setNumber(number - 1);
//       }}
//       >
//         Minus
//       </button>
//       <button
//       onClick={() => {
//         setNumber(number + 1);
//       }}
//       >
//         Plus
//       </button>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <input
        className="Alna"
        type={"text"}
        value={inputValue}
        onChange={(e) => {
        setInputValue(e.target.value);
        }}
      />
      <button
        className="Zodno"
        onClick={() => {
          setList([...list, inputValue]);
          setInputValue("");
        }}
      >
        Add
      </button>
      <div>
        {list.map((toDo, index) => {
          return (
            <p key={index} id="file" className="listContainer">
              <input type={"checkbox"} id="check"></input>
              {toDo}
              <button
                className="Hutgalna"
                id="delete"
                onClick={() => {
                  setList(list.filter((_, ind) => ind !== index));
                }}
              >
                🗑
              </button>
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default App;
