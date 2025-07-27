import React, { useState } from "react";

export default function Counter() {
  const [count, setCountNo] = useState(0);

  const IncreaseCount = () => setCountNo(count + 1);
  const DecreaseCount = () => {
    if (count > 0) setCountNo(count - 1);
  };
  return (
    <div>
      <h1> {count} </h1>
      <button onClick={IncreaseCount}> Up </button>
      <button onClick={DecreaseCount}> Down </button>
    </div>
  );
}
