import React, { ChangeEventHandler } from "react";
import Button from "../Button";

type Props = {
  label: string;
  placeHolder: string;
  name: string;
  value: string | number | readonly string[] | undefined;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
};

export default function Header() {
  return (
    <header className="py-[16px] px-[42px] md:px-[85px] flex flex-row justify-between items-center sticky top-0">
      <p className="text-[400] text-[24px]">True Talent</p>
      <Button title="Create Job" themeType="" onClick={() => {}} />
    </header>
  );
}
