import React from "react";
import "./button.scss";

interface IButtonProps {
    text: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: IButtonProps) => {
    return (
        <button className="button" onClick={props.onClick!}>
            {props.text}
        </button>
    );
};

export default Button;
