import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoutesConfig } from "../../config/routes.config";
import Button from "../../ui/button/Button";
import "./loginForm.scss";
import { loginCredentials } from "../../const/credentials";

interface ICredentials {
    name: string;
    password: string;
}

const LoginForm = () => {
    const navigate = useNavigate();

    let [credentials, setCredentials] = useState<ICredentials>({ name: "", password: "" });
    useEffect(() => {
        console.log(credentials);
    }, [credentials]);

    const loginHandler = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (credentials.name === loginCredentials.name && credentials.password === loginCredentials.password) {
            let auth: boolean = true;
            localStorage.setItem("auth", JSON.stringify(auth));
            navigate(RoutesConfig.TESTS_PAGE);
        }
    };

    return (
        <form
            className="login-form"
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                loginHandler(event);
            }}
        >
            <h1 className="login-form__header">Login</h1>
            <div className="login-form__inputs">
                <input
                    type="text"
                    placeholder="Nickname"
                    autoComplete="true"
                    onChange={(event) => setCredentials({ ...credentials, name: event.target.value })}
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(event) => setCredentials({ ...credentials, password: event.target.value })}
                />
            </div>
            <Button text="Login" />
        </form>
    );
};

export default LoginForm;
