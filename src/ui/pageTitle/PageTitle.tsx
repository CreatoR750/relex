import React from "react";
import "./pageTitle.scss";

interface IPageTitleProps {
    title: string;
}

const PageTitle = ({ title }: IPageTitleProps) => {
    return (
        <div className="container">
            <div className="page-title">
                <span>{title}</span>
            </div>
        </div>
    );
};

export default PageTitle;
