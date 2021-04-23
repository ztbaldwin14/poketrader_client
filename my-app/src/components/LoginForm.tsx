import React from "react";
import "./loginStyle.css";

interface LoginProps {
  updateToken: Function;
}

interface LoginState {
  email: string;
  password: string;
  errors: {
    email: string;
    password: string;
  };
}

const Login = () => {
  return;
};

export default Login;
