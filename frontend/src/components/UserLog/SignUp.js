import React from "react";
import SignUpForm from "./SignUpForm";
import axios from "axios";
const url = "http://localhost:8000/rest-auth/registration/";

const SignUp = ({ checkLogInfo }) => {
    const handleSingUp = async (username, email, password1, password2) => {
        const newUser = {
            username,
            email,
            password1,
            password2,
        };
        try {
            const data = await axios.post(url, newUser, {
                headers: {
                    Authorization: `AUTHORIZATION_KEY`,
                    "Content-Type": "application/json",
                },
            });
            // localStorage.setItem("token", key);
            // checkLogInfo();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <SignUpForm handleSingUp={handleSingUp} />
        </div>
    );
};

export default SignUp;
