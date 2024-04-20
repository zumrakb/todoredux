import React from "react";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const numberOfTodoTask = useSelector((state) => state.todo.noOfTodoTask);
  const numberOfCompletedTask = useSelector(
    (state) => state.todo.noOfCompletedTask
  );
  return (
    <div className="border border-[#CDBEA4] p-10 rounded-3xl flex items-center justify-between">
      <div className="text-[#CDBEA4]">
        <h2 className="text-2xl font-bold">Todo Done</h2>
        <p className="font-light tracking-wider">Keep it up</p>
      </div>
      <div className="rounded-full w-28 h-28 text-3xl font-bold flex justify-center items-center p-6 bg-[#FF5530]">
        {numberOfCompletedTask}/{numberOfTodoTask}
      </div>
    </div>
  );
};

export default Dashboard;
