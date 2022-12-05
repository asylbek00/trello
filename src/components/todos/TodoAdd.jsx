import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "store/slices/todoSlider";
import styled from "styled-components";

const TodoAdd = () => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();

  function addTaskHandler(e) {
    e.preventDefault();
    if (task && date) {
      const newItem = {
        title: task,
        date,
        id: Date.now(),
        isShow: false,
        taskCard: [],
      };
      dispatch(addToDo(newItem));
      setTask("");
      setDate("");
    } else {
    }
  }

  return (
    <>
      <Form>
        {" "}
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="button" onClick={addTaskHandler}>
          Добавить
        </button>
      </Form>
    </>
  );
};

export default TodoAdd;

const Form = styled.form`
  display: flex;
  gap: 10px;
  input {
    border: none;
    height: 29px;
    border-radius: 5px 0 5px 5px;
    gap: 20px;
    font-weight: 800;
    color: #423e4e;
    cursor: pointer;
  }
  button {
    border: none;
    border-radius: 0 5px 5px 0;
    width: 130px;
    height: 30px;
    word-wrap: break-word;
    cursor: pointer;
    :focus {
      outline: 2px solid gray;
      font-weight: bold;
    }
    :hover {
      background-color: #9fcfc5;
      box-shadow: 3px 3px 5px #6baa9d;
    }
  }
`;
