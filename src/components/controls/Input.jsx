import React from "react";

function Input(props) {
  const { label, type, name, value, onChange, ...others } = props;
  return (
    <div className="mb-4 flex flex-col">
      <label className="pb-1 text-base" htmlFor={name}>
        {label}
      </label>
      <input
        className="p-2 border border-black"
        id={name}
        type={type || "text"}
        name={name}
        value={value}
        onChange={onChange}
        {...others}
      />
    </div>
  );
}

export default Input;
