import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password1: "",
            password2: "",
        };
    }
    handleChange(e) {
        const { name, value } = e;
        this.setState(
            name === "username"
                ? { username: value }
                : name === "email"
                ? { email: value }
                : name === "password1"
                ? { password1: value }
                : name === "password2"
                ? { password2: value }
                : null
        );
    }

    render() {
        const { username, email, password1, password2 } = this.state;
        const { handleSingUp } = this.props;
        return (
            <form
                className="log-form login-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSingUp(username, email, password1, password2);
                }}
            >
                <input
                    type="text"
                    placeholder="username"
                    name="username"
                    value={username}
                    onChange={(e) => {
                        this.handleChange(e.target);
                    }}
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                        this.handleChange(e.target);
                    }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password1"
                    value={password1}
                    onChange={(e) => {
                        this.handleChange(e.target);
                    }}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    className={`${
                        password1.length < 6 ||
                        password2.length > password1.length ||
                        password2 !== password1
                            ? "wrong"
                            : password1.length >= 6 &&
                              password2.length === password1.length &&
                              password2 === password1
                            ? "right"
                            : null
                    }`}
                    value={password2}
                    onChange={(e) => {
                        this.handleChange(e.target);
                    }}
                />
                <button>Sign Up</button>
                <p>
                    Already have an account? <Link to="/login">Log In</Link>{" "}
                </p>
            </form>
        );
    }
}

export default SignUpForm;
