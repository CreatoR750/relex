import { IUser } from "../models/user";

export const usersList: IUser[] = [
    {
        id: "0",
        name: "Андрей",
        surname: "Андреев",
        tests: [
            {
                id: "100",
                name: "Фильмы",
                attempts: [
                    { id: "143", date: "2022-10-20 15:00", duration: "15", correctAnswers: 5, questions: 20 },
                    { id: "144", date: "01.01.2020 15:00", duration: "15", correctAnswers: 15, questions: 20 },
                    { id: "145", date: "01.01.2020 15:00", duration: "15", correctAnswers: 20, questions: 20 },
                ],
            },
            {
                id: "120",
                name: "Искусство",
                attempts: [
                    { id: "146", date: "01.01.2020 15:00", duration: "15", correctAnswers: 10, questions: 20 },
                    { id: "147", date: "01.01.2020 15:00", duration: "15", correctAnswers: 10, questions: 20 },
                ],
            },
        ],
    },
    {
        id: "1",
        name: "Саня",
        surname: "Андреев",
        tests: [
            {
                id: "100",
                name: "Фильмы",
                attempts: [
                    { id: "148", date: "01.01.2020 15:00", duration: "15", correctAnswers: 10, questions: 20 },
                    { id: "149", date: "01.01.2020 15:00", duration: "15", correctAnswers: 10, questions: 20 },
                ],
            },
            {
                id: "120",
                name: "Искусство",
                attempts: [{ id: "150", date: "01.01.2020 15:00", duration: "15", correctAnswers: 10, questions: 20 }],
            },
        ],
    },
];
