import React, { useEffect, useState } from "react";
import { IUser, IUserTest } from "../../models/user";
import Button from "../button/Button";
import TableRow from "../tableRow/TableRow";
import "./userCard.scss";

const UserCard = ({ name, surname, tests }: IUser) => {
    const [isStatisticOpen, setIsStatisticOpen] = useState<boolean>(false);
    const [testStatistic, setTestStatistic] = useState<IUserTest>();
    const [testFilter, setTestFilter] = useState<string>("");
    const [averageScore, setAverageScore] = useState<number>(0);
    const [successCount, setSuccessCount] = useState<number>(0);
    const [successPercent, setSuccessPercent] = useState<number>(0);

    useEffect(() => {
        if (testFilter === "default") {
            setIsStatisticOpen(false);
        } else {
            let test = tests.find((test) => test.name === testFilter);
            setTestStatistic(test);
        }
    }, [testFilter]);

    useEffect(() => {
        if (testStatistic) {
            setIsStatisticOpen(true);
            let arr = testStatistic.attempts;
            let avg = arr.reduce((sum, item): number => {
                return sum + item.correctAnswers;
            }, 0);

            let avgScore = Math.round(avg / arr.length);
            let success = arr.reduce((sum, item): number => {
                if (item.correctAnswers === item.questions) {
                    return sum + 1;
                } else return sum;
            }, 0);
            let percent = Math.round((success / arr.length) * 100);
            setSuccessPercent(percent);
            setSuccessCount(success);
            setAverageScore(avgScore);
        }
    }, [testStatistic]);

    const statisticHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        if (e.target.value !== "") {
            setTestFilter(e.target.value);
            setIsStatisticOpen(true);
        }
    };

    const closeHandler = (): void => {
        setIsStatisticOpen(false);
        setTestFilter("default");
    };

    return (
        <div className="user-card">
            <div className="user-card__info">
                <div>
                    <span>??????: {name}</span>
                </div>
                <div>
                    <span>??????????????: {surname}</span>
                </div>
                <div>
                    <span>???????????????? ????????????: {tests.length}</span>
                </div>
                <div className="user-card__info__dropdown">
                    <span>???????????????? ????????: </span>
                    <select defaultValue={testFilter} name="tests" id="tests" onChange={(e) => statisticHandler(e)}>
                        <option value="default" selected={testFilter === "default"}>
                            ????????
                        </option>
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
                            <span>????????: {testStatistic?.name}</span>
                        </div>
                        <div>
                            <span>??????????????: {testStatistic?.attempts.length}</span>
                        </div>
                        <div>
                            <span>
                                ???????????????? ??????????????: {String(successCount)} / {String(successPercent)}%{" "}
                            </span>
                        </div>
                        <div>
                            <span>?????????????? ????????: {String(averageScore)}</span>
                        </div>
                    </div>
                    <div className="user-card__header">
                        <h1>??????????????</h1>
                    </div>
                    <div className="user-card__table">
                        <div className="user-card__table__column">ID</div>
                        <div className="user-card__table__column">???????? ????????????</div>
                        <div className="user-card__table__column">?????????????????????? ??????????</div>
                        <div className="user-card__table__column">???????????????????? ????????????</div>
                    </div>
                    {testStatistic?.attempts.map((item) => {
                        return <TableRow key={item.id} id={item.id} date={item.date} duration={item.duration} correctAnswers={item.correctAnswers} />;
                    })}

                    <Button text="????????????????" onClick={() => closeHandler()} />
                </>
            )}
        </div>
    );
};

export default UserCard;
