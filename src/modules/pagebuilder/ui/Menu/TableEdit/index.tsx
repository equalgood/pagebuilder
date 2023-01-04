import React, { FC } from "react";
import Option from "./Option";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import {
  BuilderAction,
  BuilderActionTypes,
} from "../../../../../types/builder";

const TableEdit: FC = () => {
  const dispatch = useDispatch();
  const { menuSection } = useTypedSelector((state) => state.builderReducer);
  const classNames = `${
    menuSection !== "editTable" && "hidden"
  } absolute bg-slate-700 rounded-md w-[200px] flex flex-col items-start -left-[250%] top-[130%]`;

  const clickHandler = (action: BuilderAction) => dispatch(action);

  return (
    <ul className={classNames}>
      <Option
        onCLick={() =>
          clickHandler({ type: BuilderActionTypes.EDIT_ROWS, payload: "above" })
        }
      >
        Insert row above
      </Option>
      <Option
        onCLick={() =>
          clickHandler({ type: BuilderActionTypes.EDIT_ROWS, payload: "below" })
        }
      >
        Insert row below
      </Option>
      <Option
        onCLick={() =>
          clickHandler({
            type: BuilderActionTypes.EDIT_ROWS,
            payload: "delete",
          })
        }
      >
        Delete row
      </Option>
      <Option
        onCLick={() =>
          clickHandler({ type: BuilderActionTypes.EDIT_COLS, payload: "left" })
        }
      >
        Insert column left
      </Option>
      <Option
        onCLick={() =>
          clickHandler({ type: BuilderActionTypes.EDIT_COLS, payload: "right" })
        }
      >
        Insert column right
      </Option>
      <Option
        onCLick={() =>
          clickHandler({
            type: BuilderActionTypes.EDIT_COLS,
            payload: "delete",
          })
        }
      >
        Delete column
      </Option>
    </ul>
  );
};

export default TableEdit;
