import React, { FC, ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  id?: string;
  onClick: (e: any) => void;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ children, id, onClick }) => {
  const classNames: string = "";

  return (
    <button
      onClick={onClick}
      id={id}
      className="basis-auto bg-indigo-500 px-10 py-3 text-md text-white font-semibold rounded-md active:bg-indigo-600 self-start"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
