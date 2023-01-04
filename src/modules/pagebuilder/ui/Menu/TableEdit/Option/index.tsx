import React, { FC, ReactNode } from "react";

interface OptionProps {
  children: ReactNode;
  onCLick: () => void;
}

const Option: FC<OptionProps> = ({ children, onCLick }) => {
  return (
    <li className="p-[5px] border-b-[1px] border-[#b0c4de] w-full">
      <button
        onClick={onCLick}
        className="flex items-start bg-slate-700 text-sm font-bold w-full text-white p-[5px] rounded-md hover:bg-purple-600 "
      >
        {children}
      </button>
    </li>
  );
};

export default Option;
