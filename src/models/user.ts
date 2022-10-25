export interface IUserTest {
    id: string;
    name: string;
    attempts: IAttempt[];
}

export interface IAttempt {
    id: string;
    date: string;
    duration: string;
    correctAnswers: number;
    questions?: number;
}

export interface IUser {
    id: string;
    name: string;
    surname: string;
    tests: IUserTest[];
}
