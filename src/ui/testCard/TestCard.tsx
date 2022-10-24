import React, { useState } from "react";
import "./testCard.scss";
import del from "../../assets/svg/delete.svg";

interface ITestCardProps {
    id: string;
    name?: string;
    theme?: string;
    questionsAmount?: number;
    isDisabled?: boolean;
    onDelete?: (id: string) => void;
    onChecked?: (id: string) => void;
}

const TestCard = (props: ITestCardProps) => {
    const [isDisabled, setIsDisabled] = useState<Boolean>(props.isDisabled!);

    const visibleHandler = (): void => {
        props.onChecked!(props.id);
        setIsDisabled((isDisabled) => !isDisabled);
    };

    return (
        <div className="container">
            <div className="test-card">
                <div className="test-card__wrapper">
                    <span>Название: {props.name}</span>
                    <span>Тема:{props.theme}</span>
                    <span>{props.questionsAmount} вопросов</span>
                    <div>
                        <span>Активен</span>
                        <input
                            type="checkbox"
                            checked={Boolean(!isDisabled)}
                            onChange={() => {
                                visibleHandler();
                            }}
                        />
                    </div>
                    <img className="test-card__wrapper__icon" src={del} alt="Удалить" onClick={() => props.onDelete!(props.id)} />
                </div>
            </div>
        </div>
    );
};

export default TestCard;
