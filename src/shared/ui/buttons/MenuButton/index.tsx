import React, { FC, ReactNode } from "react";

interface MenuButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const MenuButton: FC<MenuButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-[32px] h-[32px] hover:bg-slate-800 rounded-md flex items-center justify-center"
    >
      {children}
    </button>
  );
};

export default MenuButton;
