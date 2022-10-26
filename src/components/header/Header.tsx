import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../ui/button/Button";
import "./header.scss";
import { RoutesConfig } from "../../config/routes.config";

const Header: React.FC = () => {
    let navigate = useNavigate();

    const logoutHandler = (): void => {
        localStorage.removeItem("auth");
        navigate(RoutesConfig.LOGIN_PAGE);
    };

    return (
        <header className="container">
            <div className="header">
                <h1 className="header__logo" onClick={() => navigate(RoutesConfig.TESTS_PAGE)}>
                    Admin <span>Panel</span>
                </h1>
                <nav className="header__nav">
                    <NavLink
                        style={{ textDecoration: "none" }}
                        className={({ isActive }) => (isActive ? "header__nav__link active" : "header__nav__link")}
                        to={RoutesConfig.TESTS_PAGE}
                    >
                        Тесты
                    </NavLink>
                    <NavLink
                        style={{ textDecoration: "none" }}
                        className={({ isActive }) => (isActive ? "header__nav__link active" : "header__nav__link")}
                        to={RoutesConfig.USERS_PAGE}
                    >
                        Пользователи
                    </NavLink>
                    <Button text="Выйти" onClick={() => logoutHandler()} />
                </nav>
            </div>
        </header>
    );
};

export default Header;
