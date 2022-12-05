import SignUp from "components/SignUp";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const RegisterPage = () => {
  return (
    <div>
      <h3 style={{color:'#3443'}}>Регистрация</h3>
      
      <SignUp/>
      <Path1>
        Уже есть аккаунт?  ➡️  <Link to="/login">Войти</Link>
      </Path1>
    </div>
  );
};

export default RegisterPage;

const Path1 = styled.p`
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`;