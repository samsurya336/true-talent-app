import React, { ChangeEventHandler } from "react";

type Props = {
  label: string;
  name: string;
  // value: string | number | readonly string[] | undefined;
  checked: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  className?: string | undefined;
};

export default function RadioButton({
  label,
  name,
  // value,
  onChange = () => {},
  className = "",
  checked,
}: Props) {
  return (
    <div className={` flex flex-row items-center gap-x-1 ${className}`}>
      <input
        type="radio"
        value={name}
        id={name}
        name={name}
        checked={checked}
        className="w-5 h-5 border border-light-gray accent-primary "
        onChange={onChange}
      />
      <label className=" text-dark-gray text-sm" htmlFor={name}>
        {label}
      </label>
    </div>
  );
}
