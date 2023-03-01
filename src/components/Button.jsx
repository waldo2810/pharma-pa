import React from "react";

const Button = ({ text }) => {
  return (
    <button
      className="w-32 h-8 text-sm rounded-md bg-dark text-light
    hover:bg-[#000]"
    >
      {text}
    </button>
  );
};

export default Button;
