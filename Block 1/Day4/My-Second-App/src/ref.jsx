import { useState, useEffect, useRef } from "react";
export function Ref() {
  const [name, setName] = useState("");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>I rendered times {renderCount.current}</div>
    </div>
  );
}

export default Ref;
