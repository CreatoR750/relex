import React from "react";
import "./pageTitle.scss";
interface IPageTitleProps {
    title: string;
}

const PageTitle = (props: IPageTitleProps) => {
    return (
        <div className="container">
            <div className="page-title">
                <span>{props.title}</span>
            </div>
        </div>
    );
};

export default PageTitle;
