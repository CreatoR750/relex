import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import TestsList from "../components/testsList/TestsList";
import PageTitle from "../ui/pageTitle/PageTitle";
import TestCard from "../ui/testCard/TestCard";

const TestsPage = () => {
    return (
        <>
            <Header />
            <PageTitle title="Тесты" />
            <TestsList />
            <Footer />
        </>
    );
};

export default TestsPage;
