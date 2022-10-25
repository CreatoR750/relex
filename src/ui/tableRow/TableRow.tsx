import { IAttempt } from "../../models/user";
import "./tableRow.scss";

const TableRow = ({ id, date, duration, correctAnswers }: IAttempt) => {
    return (
        <div className="table-row">
            <div className="table-row__cell">{id}</div>
            <div className="table-row__cell">{date}</div>
            <div className="table-row__cell">{duration} минут</div>
            <div className="table-row__cell">{correctAnswers}</div>
        </div>
    );
};

export default TableRow;
