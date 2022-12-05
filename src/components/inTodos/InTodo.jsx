/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTaskIntrello } from "store/slices/todoSlider";
import styled from "styled-components";

const inTodo = (props) => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (inputValue.length > 0) {
      const newTask = {
        task: inputValue,
        id: Date.now(),
        complete: false,
        idCard: props.id,
      };
      dispatch(addTaskIntrello( newTask));
      setInputValue("");
    }
  };
  return (
    <>
      <Form onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={inputValue}
          placeholder="Напишите задач ..."
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">
          Add
        </button>
      </Form>
    </>
  );
};

export default inTodo;

const Form = styled.form`
  border-radius: 5px;

  display: flex;
  justify-content: center;
  & input {
    width: 70%;
    border: none;
    height: 35px;
    background-color: #d5cff1;
    border-radius: 5px 0 0 5px;
    box-sizing: border-box;
    padding-left: 10px;
  }

  & button {
    width: 25%;
    border: none;
    border-radius: 0 5px 5px 0;
    background-color: #d5cff1;
    cursor: pointer;
  }
`;
