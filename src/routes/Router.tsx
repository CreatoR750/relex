import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import { RoutesConfig } from "../config/routes.config";
import TestsPage from "../pages/TestsPage";
import UsersPage from "../pages/UsersPage";

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path={RoutesConfig.LOGIN_PAGE} element={<LoginPage />} />
            <Route path={RoutesConfig.TESTS_PAGE} element={<TestsPage />} />
            <Route path={RoutesConfig.USERS_PAGE} element={<UsersPage />} />
        </Routes>
    );
};

export default Router;
