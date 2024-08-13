import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface ITodo {
  id: string;
  value: string;
  isCompleted: boolean;
}

const initialState: ITodo[] = [
  {
    id: "todo1",
    value: "Task 1",
    isCompleted: false,
  },
  {
    id: "todo2",
    value: "Task 2",
    isCompleted: true,
  },
  {
    id: "todo3",
    value: "Task 3",
    isCompleted: false,
  },
];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  selectors: {
    selectAllTodos: (state) => state,
    selectActiveTodos: (state) => state.filter((todo) => !todo.isCompleted),
    selectCompletedTodos: (state) => state.filter((todo) => todo.isCompleted),
    selectNumberActiveTodos: (state) => state.filter((todo) => !todo.isCompleted).length
  },
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo["value"]>) => {
      const newId = Date.now().toString();
      state.push({
        id: newId,
        value: action.payload,
        isCompleted: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<ITodo["id"]>) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    },
    removeCompletedTodos: (state) => {
      return state.filter((todo) => !todo.isCompleted);
    },
  },
});

export const { addTodo, toggleTodo, removeCompletedTodos } = todosSlice.actions;
export const { selectAllTodos, selectActiveTodos, selectCompletedTodos, selectNumberActiveTodos } =
  todosSlice.selectors;

export default todosSlice.reducer;
