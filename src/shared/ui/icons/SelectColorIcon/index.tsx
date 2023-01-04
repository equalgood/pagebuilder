import React, { FC } from "react";

interface SelectColorIconProps {
  color: string;
}

const SelectColorIcon: FC<SelectColorIconProps> = ({ color }) => {
  return (
    <div
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: color,
      }}
    ></div>
  );
};

export default SelectColorIcon;
