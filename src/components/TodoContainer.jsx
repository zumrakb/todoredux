import React, { useEffect } from "react";
import TodoCard from "./TodoCard";
import { useDispatch, useSelector } from "react-redux";
import {getTodosFromDB} from "../redux/slices/todoSlice"

export const TodoContainer = () => {
  const todoList = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodosFromDB());
  },[dispatch])
  
  return (
    <div className="flex flex-col gap-3 h-96 overflow-y-auto">
      {todoList.map((todoData, index) => (
        <TodoCard
          key={index}
          id={index}
          todo={todoData.todo}
          isComplete={todoData.isComplete}
        />
      ))}
    </div>
  );
};
