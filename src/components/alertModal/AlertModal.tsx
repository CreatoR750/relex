import React, { useEffect, useState } from "react";
import Button from "../../ui/button/Button";
import "./alertModal.scss";
import { IQuestion } from "../../models/questions";

interface IModalProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    error: string;
}

const AlertModal = ({ setIsOpen, error }: IModalProps) => {
    const closeButton = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        e.stopPropagation();
        setIsOpen(false);
    };

    const outsideClick = (e: any): void => {
        if (e.target.className === "alert-modal__back") {
            setIsOpen(false);
        }
    };

    return (
        <div
            className="alert-modal__back"
            onClick={(e) => {
                outsideClick(e);
            }}
        >
            <div className="alert-modal__wrapper">
                <div
                    className="alert-modal__close-btn"
                    onClick={(e) => {
                        closeButton(e);
                    }}
                >
                    X
                </div>
                <div className="alert-modal__header">
                    <h1>Невозможно сохранить</h1>
                </div>
                <div className="alert-modal__errors">
                    <span>{error}</span>
                </div>
                <div className="alert-modal__button">
                    <Button text="Ок" />
                </div>
            </div>
        </div>
    );
};

export default AlertModal;
