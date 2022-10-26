import React, { useEffect, useState } from "react";
import UserCard from "../../ui/userCard/UserCard";
import "./usersList.scss";
import { usersList } from "../../const/users";
import { IUser } from "../../models/user";
import { useNavigate } from "react-router-dom";
import { RoutesConfig } from "../../config/routes.config";
import useRedirect from "../../hooks/useRedirect";

const UsersList = () => {
    const [users, setUsers] = useState<IUser[]>(usersList);

    useRedirect();

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
