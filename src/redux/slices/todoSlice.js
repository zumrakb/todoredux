import { createSlice } from "@reduxjs/toolkit";
import { createTodo, deleteTodoByID, getTodos, updateTodo } from "../../database";
const initialState = {
  noOfCompletedTask: 0,
  noOfTodoTask: 0,
  todoList: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getTodosFromDB(state) {
      const todoData = getTodos("todo");
      state.todoList = todoData;
      state.noOfTodoTask = todoData.length;
      state.noOfCompletedTask = todoData.filter(todo => todo.isComplete === true).length;
    },
    // I will define a functions which will responsible for changing the state
    addTodo(state, action) {
      state.todoList.push(action.payload);
      state.noOfTodoTask++;
      createTodo("todo", action.payload);
    },
    markTodoComplete(state, action) {
      const data = action.payload;
      const index = data.id;

      if (data.isComplete) state.noOfCompletedTask++;
      else state.noOfCompletedTask--;
      state.todoList[index].isComplete = data.isComplete;
      updateTodo("todo", index, state.todoList[index]);
    },
    deleteTodo(state, action) {
      const id = action.payload.id;
      state.todoList.splice(id, 1);
      state.noOfTodoTask--;
      deleteTodoByID("todo", id);
    },
    editTodo(state, action) {
      console.log(action);
      const index = action.payload.id;
      state.todoList[index].todo = action.payload.editableText;
      updateTodo("todo", index, state.todoList[index]);
    },
  },
});

export const { getTodosFromDB, addTodo, markTodoComplete, deleteTodo, editTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
