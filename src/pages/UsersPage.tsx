import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import UsersList from "../components/usersList/UsersList";
import PageTitle from "../ui/pageTitle/PageTitle";

const UsersPage = () => {
    return (
        <>
            <Header />
            <PageTitle title="Пользователи" />
            <UsersList />
            <Footer />
        </>
    );
};

export default UsersPage;
