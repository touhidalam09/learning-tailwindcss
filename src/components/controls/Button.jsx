import React from "react";

function Button(props) {
  const { errorLabel, text, type, ...others } = props;
  return (
    <div className="mt-14">
      <label className="float-right text-rose-600" htmlFor={text}>
        {errorLabel !== "" ? errorLabel : ""}
      </label>
      <button
        className="w-full p-2 btn-bg-color text-white"
        id={text}
        type={type || "button"}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
