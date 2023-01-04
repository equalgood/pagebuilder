import React, { FC } from "react";
import Cell from "./Cell";
import Menu from "../Menu";
import { useDispatch } from "react-redux";
import { BuilderActionTypes } from "../../../../types/builder";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

const Table: FC = () => {
  const dispatch = useDispatch();
  const { isMenuOpen, table } = useTypedSelector(
    (state) => state.builderReducer
  );
  const { rows, rowsAmount, colsAmount } = table;
  const cells = rows.flat();

  const container = "relative w-fit h-fit mx-auto";
  const classNames = `grid gap-px`;

  const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMenuOpen) dispatch({ type: BuilderActionTypes.OPEN_MENU });
  };
  return (
    <div id="table" className={container}>
      <Menu />
      <div
        style={{
          gridTemplateRows: `repeat(${rowsAmount}, minmax(0, 1fr))`,
          gridTemplateColumns: `repeat(${colsAmount}, minmax(0, 1fr))`,
        }}
        onClick={clickHandler}
        className={classNames}
      >
        {cells.map((cell) => (
          <Cell key={cell.id} cell={cell}></Cell>
        ))}
      </div>
    </div>
  );
};

export default Table;
