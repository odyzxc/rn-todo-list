import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const selectTodosState = (state: RootState) => state.todos;

export const selectTodosList = createSelector(
  selectTodosState,
  (state) => state.list
);

export const isTodoWithTextExisting = createSelector(
  [selectTodosList, (state, text) => text],
  (items, text) => items.findIndex((item) => item.text === text) != -1
);
