import { TableCell, TableState } from "./index";

export type MenuSection = null | "editTable" | "editColor";

export interface BuilderState {
  isMenuOpen: boolean;
  menuSection: MenuSection;
  table: TableState;
  currentCell: TableCell | undefined;
}

export enum BuilderActionTypes {
  OPEN_MENU = "OPEN_MENU",
  CLOSE_MENU = "CLOSE_MENU",
  SELECT_MENU_SECTION = "SELECT_MENU_SECTION",
  CHANGE_CURRENT_CELL = "CHANGE_CURRENT_CELL",
  CHANGE_CELL_COLOR = "CHANGE_CELL_COLOR",
  EDIT_ROWS = "EDIT_ROWS",
  EDIT_COLS = "EDIT_COLS",
  CHANGE_CONTENT = "CHANGE_CONTENT",
}

export interface OpenMenuAction {
  type: BuilderActionTypes.OPEN_MENU;
}

export interface CloseMenuAction {
  type: BuilderActionTypes.CLOSE_MENU;
}

export interface SelectMenuSectionAction {
  type: BuilderActionTypes.SELECT_MENU_SECTION;
  payload: MenuSection;
}

export interface ChangeCurrentCellAction {
  type: BuilderActionTypes.CHANGE_CURRENT_CELL;
  payload: string;
}

export interface ChangeCellColorAction {
  type: BuilderActionTypes.CHANGE_CELL_COLOR;
  payload: string;
}

export interface EditRowsAction {
  type: BuilderActionTypes.EDIT_ROWS;
  payload: "above" | "below" | "delete";
}

export interface EditColsAction {
  type: BuilderActionTypes.EDIT_COLS;
  payload: "left" | "right" | "delete";
}

export interface ChangeContentAction {
  type: BuilderActionTypes.CHANGE_CONTENT;
  payload: "left" | "right" | "delete";
}

export type BuilderAction =
  | OpenMenuAction
  | CloseMenuAction
  | SelectMenuSectionAction
  | ChangeCurrentCellAction
  | ChangeCellColorAction
  | EditRowsAction
  | EditColsAction
  | ChangeContentAction;
