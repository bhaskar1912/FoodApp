// useMemo Example

// import { useCallback, useRef, useState } from "react";

// import React, { useMemo, useState } from "react";

// const Contact = () => {
//   const [inc, setInc] = useState(0);
//   const [decri, setDecri] = useState(100);

//   const Increment = () => {
//     setInc(inc + 1);
//   };

//   const Decrement = () => {
//     setDecri(decri - 1);
//   };

//   const NewMultiply = useMemo(() => {
//     console.log("hello");
//     return inc * 10;
//   }, [inc]);

//   return (
//     <>
//       <div>UseMemo Example Contact</div>
//       <p>Multiple {NewMultiply}</p>
//       <p>{inc}</p>
//       <button onClick={Increment}>Increment</button>
//       <p>{decri}</p>
//       <button onClick={Decrement}>Decrement</button>
//     </>
//   );
// };

// export default Contact;

// 2nd example

// import React, { useState, useMemo } from "react";

// const Contact = () => {
//   const [count, setCount] = useState(0);
//   const [toggle, setToggle] = useState(true);

//   // Expensive calculation memoized
//   const expensiveCalculation = () => {
//     console.log("Running expensive loop...");
//     let total = 0;
//     for (let i = 0; i < 100000000; i++) {
//       total += i;
//     }
//     return total;
//   };

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>

//       <h3>Expensive Result: {expensiveCalculation}</h3>

//       <button onClick={() => setToggle(!toggle)}>
//         Toggle State (No Count Change)
//       </button>

//       <p>{toggle ? "ON" : "OFF"}</p>
//     </div>
//   );
// };

// export default Contact;

// useCallback example

// import React from "react";
// import UseCallBack from "./UseCallBack";

// const Contact = () => {
//   const [count, setCount] = useState(0);
//   const [newCount, setNewCount] = useState(2);
//   const something = useCallback(function something() {}, [newCount]);

//   return (
//     <>
//       {/* <div>Use CallBack Example</div> */}
//       <UseCallBack something={something} newCount={newCount} />
//       {newCount}
//       <button onClick={() => setNewCount(newCount + 1)}>Increment</button>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </>
//   );
// };

// export default Contact;

// useRef Examples

// import React from "react";

// const Contact = () => {
//   const [count, setNewCount] = useState(0);
//   const newRef = useRef(0);

//   const setCount = () => {
//     newRef.current = newRef.current + 1;
//     console.log("Current Ref Value:", newRef.current);
//   };
//   return (
//     <>
//       <div>useRef</div>
//       {newRef.current}
//       <button onClick={setCount}>Increase</button>
//       {count}
//       <button onClick={() => setNewCount(count + 1)}>New</button>
//     </>
//   );
// };

// export default Contact;

// exampe 2

// import React from "react";

// const Contact = () => {
//   const [name, setName] = useState("mishra");

//   const inputRef = useRef();

//   const NewName = () => {
//     setName("");
//     inputRef.current.focus();
//   };
//   const ChangeColor = () => {
//     inputRef.current.style.color = "red";
//   };
//   return (
//     <>
//       <div>Dom</div>
//       <input
//         ref={inputRef}
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <button onClick={NewName}>Change</button>
//       <button onClick={ChangeColor}>Color</button>
//     </>
//   );
// };

// export default Contact;

// import React, { useState, useEffect, useRef } from "react";

// const Contact = () => {
//   const [count, setCount] = useState(0);
//   const prevCountRef = useRef(0);

//   useEffect(() => {
//     prevCountRef.current = count;
//   }, [count]);

//   const prevCount = prevCountRef.current;

//   return (
//     <div>
//       <h2>Current Count: {count}</h2>
//       <h3>Previous Count: {prevCount}</h3>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };

// export default Contact;
import React, { useContext } from "react";
import UserContextData from "../utils/UserContextData";

const Contact = () => {
  const data = useContext(UserContextData);

  return <div>{data.name}</div>;
};

export default Contact;
