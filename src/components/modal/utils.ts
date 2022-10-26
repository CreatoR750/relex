import { IQuestion } from "../../models/questions";

export const checkQuestionContainer = (questionContainer: IQuestion): boolean =>
    questionContainer.question == "" ||
    questionContainer[0] == "" ||
    questionContainer[1] == "" ||
    questionContainer[2] == "" ||
    questionContainer[3] == "" ||
    questionContainer.answer == -1;
