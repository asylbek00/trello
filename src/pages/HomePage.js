import React from "react";
import {  Navigate } from "react-router-dom";
import { useAuth } from "hooks/use-auth";
import { useDispatch } from "react-redux";
import { removeUser } from "store/slices/userSlice";
import Header from 'components/Header'

const HomePage = () => {
  const { isAuth, email } = useAuth();
  console.log(isAuth);
  
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(removeUser())
  }

  return isAuth ? (
    <>
      <Header removeUser = {removeHandler} email= {email}/>
    </>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default HomePage;
