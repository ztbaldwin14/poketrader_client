import * as React from "react";
// import { Component } from "react";
// import { Login } from "./LoginForm";
import { SignUp } from "./SignUpForm";

export interface AuthProps {}
export interface AuthState {
  sessionToken: string;
}
export class Auth extends React.Component<AuthProps, AuthState> {
  constructor(props: AuthProps) {
    super(props);
    this.state = {
      sessionToken: "",
    };
  }
  updateToken = (sessionToken: string) => {
    localStorage.setItem("token", sessionToken);
    this.setState({ sessionToken: sessionToken });
    console.log(sessionToken);
  };
  render() {
    return (
      <div>
        <SignUp updateToken={this.updateToken} />
        {/* <Login updateToken={this.updateToken} /> */}
      </div>
    );
  }
}

export default Auth;
