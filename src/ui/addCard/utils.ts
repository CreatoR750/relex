import { ITest } from "../../models/test";

export const checkTest = (test: ITest, counter: number): boolean => test.name === "" || test.theme === "" || counter < 4;
