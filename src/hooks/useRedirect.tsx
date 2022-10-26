import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RoutesConfig } from "../config/routes.config";

const useRedirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("auth");
        if (!auth) {
            navigate(RoutesConfig.LOGIN_PAGE);
        }
    }, []);
};

export default useRedirect;
