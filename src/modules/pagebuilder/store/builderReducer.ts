import {
  BuilderAction,
  BuilderActionTypes,
  BuilderState,
} from "../../../types/builder";
import { TableCell, TableRow } from "../../../types";
// [
//   { id: "11", color: "#ffffff", content: "1" },
//   { id: "12", color: "#111111", content: "2" },
// ],
//     [
//       { id: "21", color: "#aaaaaa", content: "3" },
//       { id: "22", color: "#555555", content: "4" },
//     ],
const initialState: BuilderState = {
  isMenuOpen: false,
  menuSection: null,
  currentCell: undefined,
  table: {
    rowsAmount: 0,
    colsAmount: 0,
    rowsLastId: 0,
    colsLastId: 0,
    rows: [],
  },
};

export const builderReducer = (
  state = initialState,
  action: BuilderAction
): BuilderState => {
  switch (action.type) {
    case BuilderActionTypes.OPEN_MENU:
      return { ...state, isMenuOpen: true };

    case BuilderActionTypes.CLOSE_MENU:
      return { ...state, isMenuOpen: false, menuSection: null };

    case BuilderActionTypes.SELECT_MENU_SECTION:
      return { ...state, menuSection: action.payload };

    case BuilderActionTypes.CHANGE_CURRENT_CELL:
      return {
        ...state,
        currentCell: state.table.rows
          .flat()
          .find((el) => el.id === action.payload),
      };

    case BuilderActionTypes.CHANGE_CELL_COLOR:
      const newRows = state.table.rows.map((row) =>
        row.map((cell) => {
          if (cell.id !== state.currentCell?.id) return cell;
          else return { ...cell, color: action.payload };
        })
      );
      return {
        ...state,
        isMenuOpen: false,
        menuSection: null,
        table: { ...state.table, rows: newRows },
      };

    case BuilderActionTypes.EDIT_ROWS:
      if (state.table.rows.length === 0 || state.table.rows[0].length === 0) {
        return {
          ...state,
          table: {
            rowsAmount: 1,
            colsAmount: 1,
            rowsLastId: 1,
            colsLastId: 1,
            rows: [
              [
                {
                  id: "11",
                  color: "#ffffff",
                  content: "",
                  rowId: 1,
                  colId: 1,
                },
              ],
            ],
          },
        };
      } else {
        const newRow: TableRow = state.table.rows[0].map((cell) => {
          const newRowId = state.table.rowsLastId + 1;
          const newTableCell: TableCell = {
            color: "#ffffff",
            content: "",
            colId: cell.colId,
            rowId: newRowId,
            id: `${newRowId}${cell.colId}`,
          };
          return newTableCell;
        });
        const newRows = [];
        if (action.payload === "below")
          newRows.push(...state.table.rows, newRow);
        if (action.payload === "above")
          newRows.push(newRow, ...state.table.rows);
        if (action.payload !== "delete") {
          return {
            ...state,
            menuSection: null,
            isMenuOpen: false,
            table: {
              ...state.table,
              rowsAmount: state.table.rowsAmount + 1,
              rowsLastId: newRow[0].rowId,
              rows: newRows,
            },
          };
        }

        if (action.payload === "delete") {
          const newRows = state.table.rows.filter(
            (row) => row[0].rowId !== state.currentCell?.rowId
          );
          return {
            ...state,
            menuSection: null,
            isMenuOpen: false,
            table: {
              ...state.table,
              rows: newRows,
            },
          };
        }
      }
      return state;

    case BuilderActionTypes.EDIT_COLS:
      if (action.payload !== "delete") {
        const newRows: Array<TableRow> = state.table.rows.map((row) => {
          const newRowId = row[0].rowId;
          const newColId = state.table.colsLastId + 1;
          const newColumn = {
            color: "#ffffff",
            content: "",
            rowId: newRowId,
            colId: newColId,
            id: `${newRowId}${newColId}`,
          };
          if (action.payload === "left") return [newColumn, ...row];
          else return [...row, newColumn];
        });
        return {
          ...state,
          isMenuOpen: false,
          menuSection: null,
          table: {
            ...state.table,
            colsAmount: state.table.colsAmount + 1,
            colsLastId: state.table.colsLastId + 1,
            rows: newRows,
          },
        };
      }
      if (action.payload === "delete") {
        const newRows = state.table.rows.map((row) =>
          row.filter((cell) => cell.colId !== state.currentCell?.colId)
        );
        return {
          ...state,
          isMenuOpen: false,
          menuSection: null,
          table: {
            ...state.table,
            colsAmount: state.table.colsAmount - 1,
            rows: newRows,
          },
        };
      }
      return state;

    case BuilderActionTypes.CHANGE_CONTENT:
      const updatedRows = state.table.rows.map((row) =>
        row.map((cell) => {
          if (cell.id === state.currentCell?.id)
            return { ...cell, content: action.payload };
          else return cell;
        })
      );
      return { ...state, table: { ...state.table, rows: updatedRows } };
    default:
      return state;
  }
};
