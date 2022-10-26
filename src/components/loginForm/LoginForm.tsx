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

    const [credentials, setCredentials] = useState<ICredentials>({ name: "", password: "" });
    const [error, setError] = useState<string>("");
    
    useEffect(() => {
        let auth: string | null = JSON.parse(localStorage.getItem("auth")!);
        auth && navigate(RoutesConfig.TESTS_PAGE);
    }, []);

    const loginHandler = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (credentials.name === loginCredentials.name && credentials.password === loginCredentials.password) {
            localStorage.setItem("auth", JSON.stringify(true));
            navigate(RoutesConfig.TESTS_PAGE);
        } else setError("Неверный логин или пароль");
    };

    return (
        <form
            className="login-form"
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                loginHandler(event);
            }}
        >
            <h1 className="login-form__header">
                Log<span>in</span>
            </h1>

            <div className="login-form__inputs">
                <input
                    type="text"
                    placeholder="Логин"
                    autoComplete="true"
                    onChange={(event) => setCredentials({ ...credentials, name: event.target.value })}
                />
                <input type="password" placeholder="Пароль" onChange={(event) => setCredentials({ ...credentials, password: event.target.value })} />
            </div>
            <div className="login-form__error">{error}</div>
            <Button text="Войти" />
        </form>
    );
};

export default LoginForm;
