import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import {
  markTodoComplete,
  deleteTodo,
  editTodo,
} from "../redux/slices/todoSlice";
const TodoCard = ({ todo, isComplete, id }) => {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [editableText, setEditable] = useState(todo);

  const dispatch = useDispatch();
  function handleOnChecked(event) {
    const data = {
      id: id,
      isComplete: event.target.checked,
    };
    dispatch(markTodoComplete(data));
  }
  function handleOnDelete(event) {
    const data = {
      id: id,
    };
    dispatch(deleteTodo(data));
  }
  function handleOnEdit() {
    setToggleEdit((prev) => !prev);
  }

  function handleOnChangeEdit(event) {
    setEditable(event.target.value);
  }

  function handleOnCancel(event) {
    setToggleEdit((prev) => !prev);
    setEditable(todo);
  }

  // Responsible for saving the data and it will send
  function handleOnSave() {
    if (editableText.trim() === "") return;
    console.log(editableText);
    // It's time to send the editable to the globale state.
    const data = {
      editableText: editableText,
      id: id,
    };
    dispatch(editTodo(data));
    setToggleEdit((prev) => !prev);
  }

  return (
    <div className="flex justify-between text-bold text-xl border border-[#CDBEA4] p-6 rounded-xl g-2 bg-[#1E1E1E] text-[#CDBEA4]">
      {toggleEdit ? (
        <>
          <div className="flex gap-2 w-full">
            <input
              className="w-full bg-[#1E1E1E] outline-none accent-[#FF5530]"
              value={editableText}
              onChange={handleOnChangeEdit}
              type="text"
            />
          </div>
          <div className="flex gap-2 cursor-pointer">
            <button onClick={handleOnCancel}>
              <RxCross1 size={20} />
            </button>
            <button onClick={handleOnSave}>
              <FaCheck size={20} />
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flex gap-2 w-full items-center">
            <input
              checked={isComplete}
              type="checkbox"
              id={id}
              className="before:content[''] cursor-pointer bg-[#1E1E1E] outline-none p-3 accent-[#FF5530] "
              onChange={handleOnChecked}
            />
            <label
              htmlFor={id}
              className={`cursor-pointer w-full ${
                isComplete && "line-through"
              }`}
            >
              {todo}
            </label>
          </div>
          <div className="flex gap-2 cursor-pointer ">
            <button onClick={handleOnEdit}>
              <CiEdit size={25} />
            </button>
            <button onClick={handleOnDelete}>
              <MdOutlineDelete size={25} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoCard;
