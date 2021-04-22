import React from "react";
import "./style.css";

const Regex = RegExp(
  /^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i
);

interface SignUpProps {
  name?: any;
  value?: any;
}
interface SignUpState {
  email: string;
  password: string;
  errors: {
    email: string;
    password: string;
  };
}

export class SignUp extends React.Component<SignUpProps, SignUpState> {
  handleChange = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case "email":
        errors.email = Regex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be eight characters long!" : "";
        break;
      default:
        break;
    }
    this.setState(Object.assign(this.state, { errors, [name]: value }));
    console.log(this.state.errors);
  };

  handleSubmit = (event: any) => {
    // event.preventDefault();
    // fetch('http://localhost:3000/user/register', {
    //     method: 'POST',
    //     body: JSON.stringify({user: {username: username, password: password}}),
    //     headers: new Headers({
    //         'Content-Type': 'application/json'
    //     })
    // })
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //         props.updateToken(data.sessionToken)
    //     })

    event.preventDefault();
    let validity = true;
    Object.values(this.state.errors).forEach(
      (val) => val.length > 0 && (validity = false)
    );
    if (validity === true) {
      console.log("Registering can be done");
    } else {
      console.log("You cannot be registered!!!");
    }
  };

  constructor(props: SignUpProps) {
    super(props);
    const initialState = {
      email: "",
      password: "",
      errors: {
        email: "",
        password: "",
      },
    };
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>Sign Up</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                onChange={this.handleChange}
              />
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" onChange={this.handleChange} />
            </div>
            <div className="street">
              <label htmlFor="street">Street</label>
              <input type="text" name="street" onChange={this.handleChange} />
            </div>
            <div className="city">
              <label htmlFor="city">City</label>
              <input type="text" name="city" onChange={this.handleChange} />
            </div>
            <div className="state">
              <label htmlFor="state">State</label>
              <input type="state" name="state" onChange={this.handleChange} />
            </div>
            <div className="zipCode">
              <label htmlFor="zipCode">Zip Code</label>
              <input
                type="zipCode"
                name="zipCode"
                onChange={this.handleChange}
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" onChange={this.handleChange} />
              {errors.email.length > 0 && (
                <span style={{ color: "red" }}>{errors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={this.handleChange}
              />
              {errors.password.length > 0 && (
                <span style={{ color: "red" }}>{errors.password}</span>
              )}
            </div>
            <div className="submit">
              <button>Sign Me Up!</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
