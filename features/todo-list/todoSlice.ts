import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import "react-native-get-random-values";
import { v1 } from "uuid";
import { TodoItem } from "../../types";

type TodosState = {
  list: Array<TodoItem>;
};

const initialState: TodosState = {
  list: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: TodoItem = {
        id: v1(),
        checked: false,
        text: action.payload,
      };
      state.list.push(newTodo);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
