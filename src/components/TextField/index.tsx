import React, { ChangeEventHandler, useState } from "react";

type Props = {
  label?: string;
  placeHolder: string;
  name: string;
  value: string | number | readonly string[] | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  className?: string | undefined;
  error?: string | undefined | null;
  required?: boolean;
};

export default function TextField({
  label,
  placeHolder,
  name,
  value,
  onChange = () => {},
  className = "",
  error,
  required = false,
}: Props) {
  return (
    <div className={`relative ${className}`}>
      {label && (
        <label
          className="block text-black text-sm font-bold mb-1"
          htmlFor={name}
        >
          {label}&nbsp;
          {required === true && <span className="text-error">*</span>}
        </label>
      )}
      <input
        className={`appearance-none border border-light-gray rounded w-full py-2 px-3 
        text-dark-gray leading-tight focus:outline-none focus:border-primary 
        placeholder:text-sm placeholder:text-dark-gray ${
          error ? "border-error" : ""
        }
        `}
        id={name}
        name={name}
        type="text"
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      />
      <p
        className={`-bottom-4 absolute text-error text-xs transition-transform ease-linear duration-[200ms] ${
          error ? "scale-100" : "scale-0"
        } `}
      >
        {error}&nbsp;
      </p>
    </div>
  );
}
