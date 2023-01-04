import React, { FC } from "react";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { BuilderActionTypes } from "../../../../../types/builder";

const ColorEdit: FC = () => {
  const dispatch = useDispatch();
  const { menuSection } = useTypedSelector((state) => state.builderReducer);
  const classNames = `${
    menuSection !== "editColor" && "hidden"
  } absolute bg-slate-700 p-[10px] h-[100px] rounded-md w-[150px] -left-[185%] top-[130%]`;

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: BuilderActionTypes.CHANGE_CELL_COLOR,
      payload: e.target.value,
    });

  return <input onChange={changeHandler} type="color" className={classNames} />;
};

export default ColorEdit;
