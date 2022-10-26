import React from "react";
import "./footer.scss";
import telegram from "../../assets/img/Telegram.png";

const Footer: React.FC = () => {
    return (
        <footer className="container">
            <div className="footer">
                <span className="footer__logo">Admin Panel</span>
                <span className="footer__copyright">© 2022 CreatoR</span>
            </div>
        </footer>
    );
};

export default Footer;
