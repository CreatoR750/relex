import React from "react";
import "./button.scss";

interface IButtonProps {
    text: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}

const Button = ({ text, onClick, disabled }: IButtonProps) => {
    return (
        <button className={disabled ? "button disabled" : "button"} onClick={onClick} disabled={disabled ? true : false}>
            {text}
        </button>
    );
};

export default Button;
