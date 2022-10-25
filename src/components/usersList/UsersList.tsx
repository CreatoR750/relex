import React, { useEffect, useState } from "react";
import UserCard from "../../ui/userCard/UserCard";
import "./usersList.scss";
import { usersList } from "../../const/users";
import { IUser } from "../../models/user";
import { useNavigate } from "react-router-dom";
import { RoutesConfig } from "../../config/routes.config";

const UsersList = () => {
    let navigate = useNavigate();
    const [users, setUsers] = useState<IUser[]>(usersList);
    
    useEffect(() => {
        let auth: string | null = JSON.parse(localStorage.getItem("auth")!);
        if (!auth) {
            navigate(RoutesConfig.LOGIN_PAGE);
        }
    }, []);

    return (
        <div className="container">
            <div className="users-list">
                {users.map((user) => {
                    return <UserCard key={user.id} id={user.id} name={user.name} surname={user.surname} tests={user.tests} />;
                })}
            </div>
        </div>
    );
};

export default UsersList;
