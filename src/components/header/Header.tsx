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
                <span className="header__logo">Admin Panel</span>
                <nav className="header__nav">
                    <NavLink style={{ textDecoration: "none" }} className="header__nav__link" to={RoutesConfig.TESTS_PAGE}>
                        Tests
                    </NavLink>
                    <NavLink style={{ textDecoration: "none" }} className="header__nav__link" to={RoutesConfig.USERS_PAGE}>
                        Users
                    </NavLink>
                    <Button text="Log out" onClick={() => logoutHandler()} />
                </nav>
            </div>
        </header>
    );
};

export default Header;
