import { useEffect, useState } from "react";
import Button from "../button/Button";
import "./addCard.scss";
import del from "../../assets/svg/delete.svg";
import Modal from "../../components/modal/Modal";
import uuid from "react-uuid";
import { IQuestionProps } from "../../components/modal/Modal";
import { isDisabled } from "@testing-library/user-event/dist/utils";

interface ITestProps {
    id: string;
    name: string;
    theme: string;
    isDisabled: boolean;
    questions: IQuestionProps[];
}

interface IAddCardProps {
    setIsOpen: React.Dispatch<React.SetStateAction<Boolean>>;
    onTestSave: (test: ITestProps) => void;
}

const AddCard = ({ setIsOpen, onTestSave }: IAddCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);
    const [test, setTest] = useState<ITestProps>({ id: uuid(), name: "", theme: "", isDisabled: true, questions: [] });
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        setCounter(test.questions.length);
    }, [test]);

    const addQuestion = (question: IQuestionProps): void => {
        let testCopy: ITestProps = { ...test };
        testCopy.questions.push(question);
        setTest(testCopy);
    };

    const saveTest = () => {
        setIsOpen(false);
        onTestSave(test);
    };

    return (
        <div className="container">
            <div className="add-card">
                <div className="add-card__wrapper">
                    <div>
                        <span>Название:</span>
                        <input
                            type="text"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTest({ ...test, name: event.target.value })}
                        ></input>
                    </div>
                    <div>
                        <span>Тема:</span>{" "}
                        <input
                            type="text"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTest({ ...test, theme: event.target.value })}
                        ></input>
                    </div>
                    <div>
                        <span>Вопросы {counter}</span>
                        <button className="" onClick={() => setIsModalOpen(true)}>
                            +
                        </button>
                    </div>
                    <div>
                        <Button text="Сохранить" onClick={() => saveTest()} />
                        <img className="test-card__wrapper__icon" src={del} alt="Удалить" onClick={() => setIsOpen(false)} />
                    </div>
                </div>
            </div>
            {isModalOpen && <Modal setIsOpen={setIsModalOpen} onSave={(question) => addQuestion(question)} />}
        </div>
    );
};

export default AddCard;
