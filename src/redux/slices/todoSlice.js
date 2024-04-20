import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noOfCompletedTask: 0,
  noOfTodoTask: 0,
  todoList: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // I will define a functions which will responsible for changing the state
    addTodo(state, action) {
      state.todoList.push(action.payload);
      state.noOfTodoTask++;
    },
    markTodoComplete(state, action) {
      const data = action.payload;
      const index = data.id;

      if (data.isComplete) state.noOfCompletedTask++;
      else state.noOfCompletedTask--;

      state.todoList[index].isComplete = data.isComplete;
    },
    deleteTodo(state, action) {
      const id = action.payload.id;
      state.todoList.splice(id, 1);
      state.noOfTodoTask--;
    },
    editTodo(state, action) {
      console.log(action);
      const index = action.payload.id;
      state.todoList[index].todo = action.payload.editableText;
    },
  },
});

export const { addTodo, markTodoComplete, deleteTodo, editTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
