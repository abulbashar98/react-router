import React from 'react';
import { useNavigate } from 'react-router-dom';

const User = (props) => {

    const { name, username, id } = props.user;

    const navigate = useNavigate()

    const showUserDetailWithNavigation = () => {
        const path = `/users/${id}`
        navigate(path)
    }

    return (
        <div>
            <h1>Hello Friend... {name}</h1>
            <button onClick={showUserDetailWithNavigation}>{username} id:{id}</button>
        </div>
    );
};

export default User;