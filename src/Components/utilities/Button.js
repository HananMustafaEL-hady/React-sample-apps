import React from "react";

const Button = ({ value, handleMethod, type, classStyle }) => {
  return handleMethod ? (
    <button className={"btn " + classStyle} type={type} onClick={handleMethod}>
      {" "}
      {value}{" "}
    </button>
  ) : (
    <button className={"btn " + classStyle} type={type}>
      {value}
    </button>
  );
};

export default Button;
