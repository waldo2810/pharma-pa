import React from "react";

const Input = ({ title, description, type }) => {
  return (
    <div className="py-3 px-5 md:max-w-[70%]">
      <h3 className="py-1 font-bold text-lg">{title}</h3>
      <p className="py-1">{description}</p>
      {type === "select" ? (
        <select
          name={title.toLowerCase()}
          className="h-12 w-[90%] border border-lightblue text-sm rounded-md focus:ring-accent focus:border-ring-accent p-3"
          required
        >
          <option>Option to select...</option>
        </select>
      ) : (
        <input
          type={type}
          name={title.toLowerCase()}
          className="h-10 w-[90%] border border-lightblue text-sm rounded-md focus:ring-accent focus:border-ring-accent p-3"
          required
        />
      )}
    </div>
  );
};

export default Input;
