import { IQuestion } from "./questions";

export interface ITest {
    id: string;
    name: string;
    theme: string;
    isDisabled: boolean;
    questions: IQuestion[];
}
