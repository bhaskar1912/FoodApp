import { useState } from "react";

const User = ({ component, name, contact }) => {
  const [count] = useState(0);
  return (
    <div>
      <h1>hello from user :{component}</h1>
      <h2>{count}</h2>
      <h2>Nmae: {name}</h2>
      <h2>Contact: {contact}</h2>
    </div>
  );
};
export default User;
