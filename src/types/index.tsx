import React from "react";

export interface TableCell {
  content: string;
  color: string;
  id: string;
  rowId: number;
  colId: number;
}

export type TableRow = Array<TableCell>;

export interface TableState {
  rowsAmount: number;
  colsAmount: number;
  rowsLastId: number;
  colsLastId: number;
  rows: Array<TableRow>;
}
