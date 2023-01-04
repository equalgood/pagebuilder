import React, { FC, useEffect, useState } from "react";
import { TableCell } from "../../../../../types";
import { useDispatch } from "react-redux";
import { BuilderActionTypes } from "../../../../../types/builder";

interface CellProps {
  cell: TableCell;
}

const Cell: FC<CellProps> = ({ cell }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [textColor, setTextColor] = useState("#000000");
  const { color, content, id } = cell;
  const classNames = `min-h-[40px] h-fit p-[8px] text-lg outline-none border-[3px] border-white focus:scale-[1.02] focus:border-purple-300`;

  const clickHandler = (e: any) =>
    dispatch({
      type: BuilderActionTypes.CHANGE_CURRENT_CELL,
      payload: e.target.id,
    });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: BuilderActionTypes.CHANGE_CONTENT,
      payload: e.target.value,
    });
    setValue(e.target.value);
  };

  useEffect(() => {
    if (!isNaN(Number(color.slice(1, 2)))) setTextColor("#fff");
    else setTextColor("#000");
  }, [color]);

  return (
    <input
      onChange={changeHandler}
      id={id}
      value={value}
      onClick={clickHandler}
      className={classNames}
      style={{ backgroundColor: color, color: textColor }}
    />
  );
};

export default Cell;
