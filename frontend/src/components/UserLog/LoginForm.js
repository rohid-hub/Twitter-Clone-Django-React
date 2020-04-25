import React, { Component } from "react";
import { Link } from "react-router-dom";

export class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
        };
    }

    handleChange = (e) => {
        const { name, value } = e;
        this.setState(
            name === "username"
                ? { username: value }
                : name === "password"
                ? { password: value }
                : null
        );
    };

    render() {
        const { username, password } = this.state;
        const { handleLogIn } = this.props;
        return (
            <form
                className="log-form login-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleLogIn(username, password);
                    this.setState({ username: "", password: "" });
                }}
            >
                <input
                    type="text"
                    placeholder="username"
                    name="username"
                    value={username}
                    onChange={(e) => this.handleChange(e.target)}
                />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    value={password}
                    onChange={(e) => this.handleChange(e.target)}
                />
                <button>Log In</button>
                <p>
                    Don't have an account? <Link to="/signup">Sign Up</Link>{" "}
                </p>
            </form>
        );
    }
}

export default LoginForm;
