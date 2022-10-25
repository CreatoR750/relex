import React, { useEffect, useState } from "react";
import Button from "../../ui/button/Button";
import "./modal.scss";
import { IQuestion } from "../../models/questions";

interface IModalProps {
    setIsOpen: React.Dispatch<React.SetStateAction<Boolean>>;
    onSave: (question: IQuestion) => void;
}

const Modal = ({ setIsOpen, onSave }: IModalProps) => {
    const [questionContainer, setQuestionContainer] = useState<IQuestion>({ question: "", 0: "", 1: "", 2: "", 3: "", answer: -1 });

    useEffect(() => {
        console.log(questionContainer);
    }, [questionContainer]);

    const closeButton = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        e.stopPropagation();
        setIsOpen(false);
    };

    const outsideClick = (e: any): void => {
        if (e.target.className === "modal__back") {
            setIsOpen(false);
        }
    };

    const saveHandler = (): void => {
        onSave(questionContainer);
        setIsOpen(false);
    };

    return (
        <div
            className="modal__back"
            onClick={(e) => {
                outsideClick(e);
            }}
        >
            <div className="modal__wrapper">
                <div
                    className="modal__close-btn"
                    onClick={(e) => {
                        closeButton(e);
                    }}
                >
                    X
                </div>
                <div className="modal__header">
                    <h1>Добавить вопрос</h1>
                </div>
                <div className="modal__questions">
                    <input
                        className="custom-input"
                        type="text"
                        placeholder="Вопрос"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                            setQuestionContainer({ ...questionContainer, question: event.target.value })
                        }
                    />
                    <div className="modal__questions__answer">
                        <input
                            className="custom-input"
                            type="text"
                            placeholder="Ответ #1"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                setQuestionContainer({ ...questionContainer, 0: event.target.value })
                            }
                        />
                        <input
                            type="radio"
                            name="1"
                            value={0}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                setQuestionContainer({ ...questionContainer, answer: Number(event.target.value) })
                            }
                        />
                    </div>
                    <div className="modal__questions__answer">
                        <input
                            className="custom-input"
                            type="text"
                            placeholder="Ответ #2"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                setQuestionContainer({ ...questionContainer, 1: event.target.value })
                            }
                        />
                        <input
                            type="radio"
                            name="1"
                            value={1}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                setQuestionContainer({ ...questionContainer, answer: Number(event.target.value) })
                            }
                        />
                    </div>
                    <div className="modal__questions__answer">
                        <input
                            className="custom-input"
                            type="text"
                            placeholder="Ответ #3"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                setQuestionContainer({ ...questionContainer, 2: event.target.value })
                            }
                        />
                        <input
                            type="radio"
                            name="1"
                            value={2}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                setQuestionContainer({ ...questionContainer, answer: Number(event.target.value) })
                            }
                        />
                    </div>
                    <div className="modal__questions__answer">
                        <input
                            className="custom-input"
                            type="text"
                            placeholder="Ответ #4"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                setQuestionContainer({ ...questionContainer, 3: event.target.value })
                            }
                        />
                        <input
                            type="radio"
                            name="1"
                            value={3}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                setQuestionContainer({ ...questionContainer, answer: Number(event.target.value) })
                            }
                        />
                    </div>
                </div>
                <div className="modal__button">
                    <Button text="Добавить" onClick={() => saveHandler()} />
                </div>
            </div>
        </div>
    );
};

export default Modal;
