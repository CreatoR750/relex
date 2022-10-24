import React from "react";
import Button from "../../ui/button/Button";
import "./header.scss";

const Header: React.FC = () => {
    return (
        <header className="container">
            <div className="header">
                <span className="header__logo">Admin Panel</span>
                <nav className="header__nav">
                    <span className="header__nav__link">Tests</span>
                    <span className="header__nav__link">Users</span>
                    <Button text="Log out" />
                </nav>
            </div>
        </header>
    );
};

export default Header;
