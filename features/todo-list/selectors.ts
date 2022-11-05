import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const selectTodosState = (state: RootState) => state.todos;

export const selectTodosList = createSelector(selectTodosState, (state) =>
  [...state.list].sort((a, b) => {
    if (a.checked && !b.checked) {
      return 1;
    }
    if (b.checked && !a.checked) {
      return -1;
    }
    return 0;
  })
);

export const isTodoWithTextExisting = createSelector(
  [selectTodosList, (state, text) => text],
  (items, text) => items.findIndex((item) => item.text === text) != -1
);
