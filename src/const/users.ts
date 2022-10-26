import { IUser } from "../models/user";

export const usersList: IUser[] = [
    {
        id: "0",
        name: "Андрей",
        surname: "Андреев",
        tests: [
            {
                id: "128",
                name: "TypeScript",
                attempts: [
                    { id: "150", date: "01.01.2020 15:00", duration: "28", correctAnswers: 10, questions: 20 },
                    { id: "151", date: "01.01.2020 16:00", duration: "30", correctAnswers: 15, questions: 20 },
                    { id: "152", date: "01.01.2020 17:00", duration: "31", correctAnswers: 17, questions: 20 },
                    { id: "153", date: "01.01.2020 18:00", duration: "25", correctAnswers: 20, questions: 20 },
                    { id: "154", date: "01.01.2020 19:00", duration: "28", correctAnswers: 20, questions: 20 },
                    { id: "155", date: "01.01.2020 20:00", duration: "33", correctAnswers: 20, questions: 20 },
                ],
            },
            {
                id: "125",
                name: "Фильмы",
                attempts: [
                    { id: "143", date: "01.03.2020 11:00", duration: "15", correctAnswers: 5, questions: 20 },
                    { id: "144", date: "01.03.2020 12:30", duration: "20", correctAnswers: 15, questions: 20 },
                    { id: "145", date: "01.03.2020 14:00", duration: "17", correctAnswers: 20, questions: 20 },
                ],
            },
            {
                id: "120",
                name: "Сериалы",
                attempts: [
                    { id: "146", date: "01.01.2020 15:00", duration: "15", correctAnswers: 10, questions: 20 },
                    { id: "147", date: "01.01.2020 15:00", duration: "15", correctAnswers: 10, questions: 20 },
                ],
            },
        ],
    },
    {
        id: "1",
        name: "Александр",
        surname: "Александров",
        tests: [
            {
                id: "100",
                name: "React",
                attempts: [
                    { id: "160", date: "01.01.2020 15:00", duration: "15", correctAnswers: 10, questions: 20 },
                    { id: "161", date: "01.01.2020 15:00", duration: "15", correctAnswers: 10, questions: 20 },
                ],
            },
            {
                id: "120",
                name: "TypeScript",
                attempts: [
                    { id: "164", date: "01.01.2020 15:00", duration: "28", correctAnswers: 10, questions: 20 },
                    { id: "165", date: "01.01.2020 15:00", duration: "30", correctAnswers: 15, questions: 20 },
                    { id: "166", date: "01.01.2020 15:00", duration: "31", correctAnswers: 17, questions: 20 },
                    { id: "167", date: "01.01.2020 15:00", duration: "25", correctAnswers: 18, questions: 20 },
                    { id: "168", date: "01.01.2020 15:00", duration: "28", correctAnswers: 17, questions: 20 },
                    { id: "169", date: "01.01.2020 15:00", duration: "33", correctAnswers: 20, questions: 20 },
                ],
            },
        ],
    },
];
