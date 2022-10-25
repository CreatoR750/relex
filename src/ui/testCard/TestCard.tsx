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
        <div className="test-card">
            <div className="test-card__wrapper">
                <div>
                    <span>Название: {props.name}</span>
                </div>
                <div>
                    <span>Тема:{props.theme}</span>
                </div>
                <div>
                    <span>{props.questionsAmount} вопросов</span>
                </div>
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
    );
};

export default TestCard;
