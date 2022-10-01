import React, { useState } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { getLogin } from "../actions/auth/loginAction";
//react router dom
import { Navigate } from "react-router-dom";
//componentes
import Login from "../components/auth/Login";

function LoginPage() {
  //state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //redux
  const dispatch = useDispatch();
  const redirectToRefer = useSelector((state) => state.auth.redirectToRefer);
  const error = useSelector((state) => state.auth.error);
  const login = (user) => dispatch(getLogin(user));

  const clickSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    login(user);
  };

  if (redirectToRefer) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {Login (setEmail, setPassword, clickSubmit, error)}
    </>
  );
}

export default LoginPage;
