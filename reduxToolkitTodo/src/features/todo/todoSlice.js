import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
  selectedId: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload); //👉 action.payload = the data you send with dispatch
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo,
      );
    },
    setSelectedTodo: (state, action) => {
      state.selectedId = action.payload;
    },
    clearSelectedTodo: (state) => {
      state.selectedId = null;
    },
  },
});
export const {
  addTodo,
  removeTodo,
  updateTodo,
  setSelectedTodo,
  clearSelectedTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
