import React from "react";
import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";

export const TodoContainer = () => {
  const todoList = useSelector((state) => state.todo.todoList);
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
