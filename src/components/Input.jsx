import React, { useState } from "react";
import { addTodo } from "../redux/slices/todoSlice";
import { useDispatch } from "react-redux";
import { FaPlus } from "react-icons/fa";
const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  function handlOnChange(event) {
    setInputValue(event.target.value);
  }

  function handleOnSubmit() {
    if (inputValue.trim() === "") return;
    // Here we are ready to send our data global state.
    const data = {
      todo: inputValue,
      isComplete: false,
    };

    dispatch(addTodo(data)); // <33333333333Sendinddata to global state.

    setInputValue("");
  }

  return (
    <div className="flex gap-8">
      <input
        placeholder="write your next task"
        className="w-[87%] border p-4 rounded-3xl bg-[#1E1E1E] border-none outline-none text-[#CDBEA4]"
        value={inputValue}
        onChange={handlOnChange}
      />
      <button
        onClick={handleOnSubmit}
        className="w-[13%] flex justify-center items-center rounded-full border border-none bg-[#FF5530]"
      >
        <FaPlus color={20} />
      </button>
    </div>
  );
};

export default Input;
