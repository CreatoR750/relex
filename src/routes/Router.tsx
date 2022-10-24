import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import { RoutesConfig } from "../config/routes.config";
import TestsPage from "../pages/TestsPage";

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path={RoutesConfig.LOGIN_PAGE} element={<LoginPage />} />
            <Route path={RoutesConfig.TESTS_PAGE} element={<TestsPage />} />
        </Routes>
    );
};

export default Router;
