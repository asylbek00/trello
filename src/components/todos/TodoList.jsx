import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteToDo, toggleForm } from "store/slices/todoSlider";
import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";
import InTodo from "components/inTodos/InTodo";
import InTodoTask from "components/inTodos/InTodoTask";


const TodoList = () => {
  const { todoList } = useSelector((state) => state.toDo);
  console.log(todoList);

  const dispatch = useDispatch();

  return (
    <ul>
      {todoList.map((el) => {
        return (
          <LiCard key={el.id}>
            <Div>
              <p onClick={() => dispatch(toggleForm(el.id))}>
                {el.title}
                {el.date}
              </p>
              <AiFillDelete style={{color:'red'}} onClick={() => dispatch(deleteToDo(el.id))} />
            </Div>

            {el.isShow && (
              <InTodo id={el.id} taskCard={el.taskCard} />
            )}
            <InTodoTask taskCard={el.taskCard} />
          </LiCard>
        );
      })}
    </ul>
  );
};

export default TodoList;


const Div = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 50px;
 
`;
const LiCard = styled.li`
  list-style: none;
  background-color: #ebecf0;
  border-radius: 6px;
  cursor: grab;
  color: #273a5a;
  width: 300px;
  float: left;
  margin: 5px;
`;

