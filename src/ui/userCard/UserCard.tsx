import React, { useEffect, useMemo, useState } from "react";
import { IAttempt, IUser, IUserTest } from "../../models/user";
import Button from "../button/Button";
import TableRow from "../tableRow/TableRow";
import "./userCard.scss";

const UserCard = ({ name, surname, tests }: IUser) => {
    const [isStatisticOpen, setIsStatisticOpen] = useState<Boolean>(false);
    const [testStatistic, setTestStatistic] = useState<IUserTest>();
    const [testFilter, setTestFilter] = useState<String>("");
    const [averageScore, setAverageScore] = useState<Number>(0);
    const [successCount, setSuccessCount] = useState<Number>(0);
    const [successPercent, setSuccessPercent] = useState<Number>(0);

    useMemo(() => {
        let test = tests.find((test) => test.name === testFilter);
        setTestStatistic(test);
    }, [testFilter]);

    useEffect(() => {
        // let arr = testStatistic?.attempts;
        // let avg = arr?.reduce((sum, item): number => {
        //     return sum + item.correctAnswers / item.questions;
        // }, 0);
        // let avgScore = Math.round((avg! / arr?.length!) * 100);
        // setAverageScore(avgScore);
        let arr = testStatistic?.attempts;
        let avg = arr?.reduce((sum, item): number => {
            return sum + item.correctAnswers;
        }, 0);
        let avgScore = Math.round(avg! / arr?.length!);

        let success = arr?.reduce((sum, item): number => {
            if (item.correctAnswers! === item.questions!) {
                return sum + 1;
            } else return sum;
        }, 0);
        let percent = Math.round((success! / arr?.length!) * 100);
        setSuccessPercent(percent);
        setSuccessCount(success!);
        setAverageScore(avgScore);
    }, [testStatistic]);

    const statisticHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        if (e.target.value !== "") {
            setTestFilter(e.target.value);
            setIsStatisticOpen(true);
        }
    };

    return (
        <div className="user-card">
            <div className="user-card__info">
                <div>
                    <span>Имя: {name}</span>
                </div>
                <div>
                    <span>Фамилия: {surname}</span>
                </div>
                <div>
                    <span>Пройдено тестов: {tests.length}</span>
                </div>
                <div className="user-card__info__dropdown">
                    <span>Выберите тест: </span>
                    <select defaultValue={""} name="tests" id="tests" onChange={(e) => statisticHandler(e)}>
                        <option value="">Тест</option>
                        {tests.map((test) => {
                            return (
                                <option key={test.id} value={test.name}>
                                    {test.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>
            {isStatisticOpen && (
                <>
                    <div className="user-card__statistic">
                        <div>
                            <span>Тест: {testStatistic?.name}</span>
                        </div>
                        <div>
                            <span>Попыток: {testStatistic?.attempts.length}</span>
                        </div>
                        <div>
                            <span>
                                Успешных попыток: {String(successCount)} / {String(successPercent)}%{" "}
                            </span>
                        </div>
                        <div>
                            <span>Средний балл: {String(averageScore)}</span>
                        </div>
                    </div>
                    <div className="user-card__header">
                        <h1>Попытки</h1>
                    </div>
                    <div className="user-card__table">
                        <div className="user-card__table__column">ID</div>
                        <div className="user-card__table__column">Дата начала</div>
                        <div className="user-card__table__column">Затраченное время</div>
                        <div className="user-card__table__column">Правильные ответы</div>
                    </div>
                    {testStatistic?.attempts.map((item) => {
                        return <TableRow key={item.id} id={item.id} date={item.date} duration={item.duration} correctAnswers={item.correctAnswers} />;
                    })}

                    <Button text="Свернуть" onClick={() => setIsStatisticOpen(false)} />
                </>
            )}
        </div>
    );
};

export default UserCard;
