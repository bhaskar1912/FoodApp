import React, { useMemo, useState } from "react";

const UseMemoExample = () => {
  const [inc, setInc] = useState(0);
  const [decri, setDecri] = useState(100);

  const multipliedValue = useMemo(() => {
    console.log("multiple is running");
    return inc * 10;
  }, [inc]);

  return (
    <>
      <h2>Multiplied Value: {multipliedValue}</h2>
      <p>Increment: {inc}</p>
      <button onClick={() => setInc(inc + 1)}>Increment</button>
      <p>Decrement: {decri}</p>
      <button onClick={() => setDecri(decri - 1)}>Decrement</button>
    </>
  );
};

export default UseMemoExample;
