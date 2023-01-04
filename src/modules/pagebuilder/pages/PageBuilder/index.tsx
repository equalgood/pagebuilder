import React from "react";
import PrimaryButton from "../../../../shared/ui/buttons/PrimaryButton";
import Table from "../../ui/Table";
import { useDispatch } from "react-redux";
import { BuilderActionTypes } from "../../../../types/builder";

const PageBuilder = () => {
  const dispatch = useDispatch();
  const clickHandler = (e: any) => {
    if (
      e.target.closest("#table") === null &&
      e.target.closest("button") === null
    ) {
      dispatch({ type: BuilderActionTypes.CLOSE_MENU });
    }
  };

  const addRowHandler = (e: React.MouseEvent<HTMLButtonElement>) =>
    dispatch({ type: BuilderActionTypes.EDIT_ROWS, payload: "below" });

  return (
    <div
      onClick={clickHandler}
      className="overflow-scroll h-screen min-w-full px-10 py-32 flex relative"
    >
      <PrimaryButton onClick={addRowHandler} id="add-row">
        Add row
      </PrimaryButton>
      <Table />
    </div>
  );
};

export default PageBuilder;
