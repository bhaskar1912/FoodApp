import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      Error Occur
      {err.status}
    </div>
  );
};

export default Error;
