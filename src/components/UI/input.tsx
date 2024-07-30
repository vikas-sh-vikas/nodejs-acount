import React, { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  register?: UseFormRegister<any>;
  name: string;
}

function Input({ error, name, ...props }: InputProps) {
  let { register = (name: string) => {} } = props;
  return (
    <>
        <input {...props} {...register(name)} />
      {error && <p className="text-red-600">* {error}</p>}
    </>
  );
}

export default Input;
