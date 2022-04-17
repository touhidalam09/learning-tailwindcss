import React, { useState } from "react";

export function useForm(initializeValue) {
  const [values, setValues] = useState(initializeValue);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const resetForm = () => {
    setValues(initializeValue);
  };
  return {
    values,
    setValues,
    handleInputChange,
    resetForm,
  };
}

export function Form(props) {
  const { children, ...other } = props;

  return <form {...other}>{children}</form>;
}
