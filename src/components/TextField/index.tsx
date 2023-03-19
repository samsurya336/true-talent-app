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
          className="block text-black text-[14px] leading-[20px] font-bold mb-[4px] "
          htmlFor={name}
        >
          {label}&nbsp;
          {required === true && <span className="text-[#D86161]">*</span>}
        </label>
      )}
      <input
        className={`appearance-none border border-[#E6E6E6] rounded w-full py-2 px-3 
        text-[#7A7A7A] leading-tight focus:outline-none focus:border-[#1597E4] 
        placeholder:text-sm placeholder:text-[#7A7A7A] ${
          error ? "border-[#D86161]" : ""
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
        className={`-bottom-4 absolute text-[#D86161] text-xs transition-transform ease-linear duration-[200ms] ${
          error ? "scale-100" : "scale-0"
        } `}
      >
        {error}&nbsp;
      </p>
    </div>
  );
}
