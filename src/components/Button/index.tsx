import React, { ChangeEventHandler, MouseEventHandler } from "react";

type Props = {
  title: string;
  themeType?: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
};

export default function Button({
  title,
  themeType = "PRIMARY",
  onClick,
  className = "",
  loading = false,
  disabled = false,
  type,
}: Props) {
  return (
    <button
      type={type}
      className={`font-[500] text-[16px] py-[8px] px-[16px] ${
        themeType === "PRIMARY"
          ? "bg-[#1597E4] text-white"
          : "bg-white text-[#1597E4] border-solid border-[1px] border-[#1597E4]"
      } rounded-[6px] flex flex-row items-center ${
        disabled && "opacity-50 cursor-not-allowed"
      }
       ${className}`}
      onClick={(event) => {
        if (disabled !== true && typeof onClick === "function") {
          onClick(event);
        }
      }}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {title}
    </button>
  );
}
