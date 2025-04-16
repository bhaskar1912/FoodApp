import React from "react";

const UseCallBack = React.memo(({ something }) => {
  console.log("UseCallBack Component");
  return <div>UseCallBack</div>;
});

export default UseCallBack;
