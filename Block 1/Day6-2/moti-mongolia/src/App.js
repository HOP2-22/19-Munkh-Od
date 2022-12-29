// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Home } from "./pages/Home";
// import { Login } from "./pages/Login";
// import { SignUp } from "./pages/SignUp";
// import { UserID } from "./pages/UserID";
// const App = () => {
//   console.log("test");
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Login" element={<Login />} />
//         <Route path="/SignUp" element={<SignUp />} />
//         <Route path=":UserID" element={<UserID />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";

const MyButton = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <button onClick={() => setCount(count + 1)}>
      You clicked {count} times
    </button>
  );
};

export default MyButton;
