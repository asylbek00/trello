import React, { useState } from "react";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { useDispatch } from "react-redux";
// import { setUser } from "store/slices/userSlice";
import { SiTrello } from "react-icons/si";
import styled from "styled-components";

const Form = ({ title, handleClick }) => {
  console.log(title);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <MainBlock>
      <Trello>
        <SiTrello style={{ fontSize: "2rem", color: "blue" }} />
        <h1>TRELLO</h1>
      </Trello>

      <FormBlock>
        <h3>Введите данные</h3>
        <label htmlFor="text">Электронная почта:</label>
        <input
          id="text"
          name="text"
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <label htmlFor="email">Пароль:</label>
        <input
          id="email"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          // autoComplete="on"
          // {...register("password", {required:true, maxLength: 10 , pattern: /^[A-Za-z]+$/i } )}
        />
        <button onClick={() => handleClick(email, password)}>{title}</button>
      </FormBlock>

    </MainBlock>
  );
};

export default Form;

const Trello = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  h1 {
    font-weight: bold;
  }
  padding-bottom: 40px;
`;

const MainBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const FormBlock = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 3px 3px 20px -2px rgba(94, 110, 108, 0.6);
  border-radius: 10px;
  padding: 40px 100px 50px 100px;
  background-color: #fafbfb;
  input {
    margin: 20px;
    padding: 10px 10px;
    border-radius: 8px;
    width: 300px;
    border: 2px solid #3a73bf;
    box-shadow: 3px 3px 5px -2px #5c7da8;
    font-size: 14px;
    font-weight: 600;
  }
  label {
    color: #5d5f5f;
    font-weight: bold;
    width: 130px;
    float: left;
    width: 100%;
  }
  button {
    padding: 8px;
    border: 1px solid gray;
    background-color: #9f9b98;
    border-radius: 5px;
    font: inherit;
    cursor: pointer;
    :focus {
      outline: 2px solid gray;
      font-weight: bold;
      color: white;
    }
    :hover {
      background-color: #9fcfc5;
      box-shadow: 3px 3px 5px #6baa9d;
    }
  }
  h3 {
    padding-bottom: 20px;
  }
`;
