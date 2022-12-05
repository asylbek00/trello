import Login from "components/Login";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginPage = () => {
  return (
    <div>
      <h2 style={{color: '#3444'}}>Вход</h2>
      <Login />
      <Path>
        Если нет аккаунта ➡️<Link to="/register"> Зарегистируйтесь!</Link>
      </Path>
    </div>
  );
};

export default LoginPage;

const Path = styled.p`
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`;
