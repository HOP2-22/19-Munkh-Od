import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
  });
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  
  const submit = () => {
    if (inputValue.name === "") {
      nameRef.current.focus();
      return;
    }
    if (inputValue.email === "") {
      emailRef.current.focus();
      return;
    }
    if (inputValue.phone === "") {
      phoneNumberRef.current.focus();
      return;
    }
    // alert("successful");
    console.log(inputValue);
  };
  return (
    <div>
      <div className="row">
        <h1>SIGN UP</h1>
        <p>Name</p>
        <div>
          <input
            ref={nameRef}
            value={inputValue.name}
            className="inp"
            type={"text"}
            onChange={(e) => {
              setInputValue({ ...inputValue, name: e.target.value });
            }}
          />
          <div className="line"></div>
        </div>
      </div>
      <div className="row">
        <p>Email</p>
        <div>
          <input
            ref={emailRef}
            value={inputValue.email}
            className="inp"
            onChange={(e) => {
              setInputValue({ ...inputValue, email: e.target.value });
            }}
          />
          <div className="line"></div>
        </div>
      </div>
      <div className="row">
        <p>phone number</p>
        <div>
          <input
            ref={phoneNumberRef}
            value={inputValue.phone}
            className="inp"
            onChange={(e) => {
              setInputValue({ ...inputValue, phone: e.target.value });
            }}
          />
          <div className="line"></div>
        </div>
      </div>
      <button
        className="but"
        onClick={() => {
          console.log(inputValue);
          setInputValue({
            name: "",
            email: "",
          });
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
