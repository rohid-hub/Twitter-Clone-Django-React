import React from "react";
import LoginForm from "./LoginForm";
import axios from "axios";
const url = "http://localhost:8000/rest-auth/login/";

const Login = () => {
    const handleLogIn = async (username, password) => {
        try {
            const {
                data: { key },
            } = await axios.post(
                url,
                {
                    username,
                    password,
                },
                {
                    headers: {
                        Authorization: `AUTHORIZATION_KEY`,
                        "Content-Type": "application/json",
                    },
                }
            );
            localStorage.setItem("token", key);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <LoginForm handleLogIn={handleLogIn} />
        </div>
    );
};

export default Login;
