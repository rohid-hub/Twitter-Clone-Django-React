import React from "react";
import { Link } from "react-router-dom";

const SignUpForm = () => {
    return (
        <form className="log-form login-form">
            <input type="text" placeholder="username" />
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="password" placeholder="Password" name="password1" />
            <input
                type="password"
                placeholder="Confirm Password"
                name="password2"
            />
            <button>Sign Up</button>
            <p>
                Already have an account? <Link to="/login">Log In</Link>{" "}
            </p>
        </form>
    );
};

export default SignUpForm;
