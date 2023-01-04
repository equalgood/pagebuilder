import React, { FC } from "react";
import MenuButton from "../../../../shared/ui/buttons/MenuButton";
import TableIcon from "../../../../shared/ui/icons/TableIcon";
import CloseIcon from "../../../../shared/ui/icons/CloseIcon";
import SelectColorIcon from "../../../../shared/ui/icons/SelectColorIcon";
import TableEdit from "./TableEdit";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { BuilderActionTypes } from "../../../../types/builder";
import { useDispatch } from "react-redux";
import ColorEdit from "./ColorEdit";

const Menu: FC = () => {
  const dispatch = useDispatch();
  const { isMenuOpen, menuSection, currentCell } = useTypedSelector(
    (state) => state.builderReducer
  );
  const classNames = `${
    !isMenuOpen && "hidden"
  } z-10 absolute -top-24 left-[50%] translate-x-[-50%] bg-slate-700 p-[5px] flex items-center rounded-md gap-2`;

  const clickHandler = (buttonType: string, sectionType?: string) => {
    switch (buttonType) {
      case "close":
        dispatch({ type: BuilderActionTypes.CLOSE_MENU });
        return;
      case "section":
        if (menuSection === `edit${sectionType}`) {
          dispatch({
            type: BuilderActionTypes.SELECT_MENU_SECTION,
            payload: null,
          });
        } else {
          dispatch({
            type: BuilderActionTypes.SELECT_MENU_SECTION,
            payload: `edit${sectionType}`,
          });
        }
        return;
      default:
        return;
    }
  };

  return (
    <div className={classNames}>
      <div className="relative">
        <MenuButton onClick={() => clickHandler("section", "Table")}>
          <TableIcon />
        </MenuButton>
        <TableEdit />
      </div>
      <div className="relative">
        <MenuButton onClick={() => clickHandler("section", "Color")}>
          <SelectColorIcon color={`${currentCell?.color}`} />
        </MenuButton>
        <ColorEdit />
      </div>
      <MenuButton onClick={() => clickHandler("close")}>
        <CloseIcon />
      </MenuButton>
    </div>
  );
};

export default Menu;
