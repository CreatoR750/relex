import React from "react";
import "./loginContainer.scss";
import LoginForm from "../loginForm/LoginForm";
const LoginContainer = () => {
    return (
        <div className="container">
            <div className="login-container">
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginContainer;
