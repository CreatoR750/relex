import React, { useEffect, useState } from "react";
import TestCard from "../../ui/testCard/TestCard";
import "./testsList.scss";
import { testsList } from "../../const/tests";
import Button from "../../ui/button/Button";
import { ITest } from "../../models/test";
import AddCard from "../../ui/addCard/AddCard";
import { useNavigate } from "react-router-dom";
import { RoutesConfig } from "../../config/routes.config";
import useRedirect from "../../hooks/useRedirect";

const TestsList = () => {
    const navigate = useNavigate();
    const [tests, setTests] = useState<ITest[]>(testsList);
    const [isAddCardOpen, setIsAddCardOpen] = useState<boolean>(false);

    useRedirect();

    const addTest = (test: ITest): void => {
        let testsCopy = [...tests];
        testsCopy.push(test);
        setTests(testsCopy);
    };

    const deleteTest = (id: string): void => {
        let filter = tests.filter((test) => test.id !== id);
        setTests(filter);
    };

    const changeVisibility = (id: string): void => {
        let testsCopy = [...tests];
        let index = testsCopy.findIndex((el) => el.id === id);
        testsCopy[index] = { ...testsCopy[index], isDisabled: !testsCopy[index].isDisabled };
        setTests(testsCopy);
    };

    return (
        <div className="container">
            <div className="tests-list">
                {tests.map((test: any) => {
                    return (
                        <TestCard
                            id={test.id}
                            key={test.id}
                            name={test.name}
                            theme={test.theme}
                            questionsAmount={test.questions.length}
                            isDisabled={test.isDisabled}
                            onDelete={(id: string) => deleteTest(id)}
                            onChecked={(id: string) => changeVisibility(id)}
                        />
                    );
                })}
                {isAddCardOpen ? (
                    <div className="tests-list__space">
                        <AddCard setIsOpen={setIsAddCardOpen} onTestSave={(test) => addTest(test)} />
                    </div>
                ) : (
                    <div className="tests-list__space">
                        <Button text="Добавить тест" onClick={() => setIsAddCardOpen(true)} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default TestsList;
