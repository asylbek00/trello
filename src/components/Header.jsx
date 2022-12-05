import React from "react";
import styled from "styled-components";
import img from "../../src/img/header2.jpeg";
import { ImUser } from "react-icons/im";
import TodoAdd from "./todos/TodoAdd";
import TodoList from "./todos/TodoList";
import { useDispatch } from "react-redux";

const Header = ({ removeUser, email }) => {
  const dispatch = useDispatch()
  return (
    <>
      <Main>
        <h1>TRELLO</h1>
        <Nav>
          <UserBlock>
            <ImUser style={{ color: "blue" }} />
            <p>{email}</p>
          </UserBlock>
          <HeaderButton onclick={() => dispatch(removeUser())}>Выйти</HeaderButton>
        </Nav>
      </Main>

      <AddTodo>
        <TodoAdd />
      </AddTodo>
      <TodoList />
    </>
  );
};

export default Header;

const Main = styled.main`
  background-image: url("${img}");
  background-size: cover;
  background-position: 100%;
  text-align: center;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserBlock = styled.div`
  display: flex;
  gap: 8px;
  border-radius: 6px;
  background-color: #aab3b6;
  padding: 2px 10px;
  border: 1px solid black;
  color: #1e2c35;
  font-weight: 700;
`;

const HeaderButton = styled.button`
  padding: 4px 25px;
  border-radius: 6px;
  background: #d2c5c5;
  color: black;
  transition: 0.4s;
  border: 1px solid black;
  font-weight: 600;
  cursor: pointer;
  :hover {
    background: #4e4747;
    color: white;
  }
`;

const AddTodo = styled.div`
  text-align: center;
  margin: 5% auto;
  width: 500px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: linear-gradient(290deg, #0c79d2, #1a9055);
`;
