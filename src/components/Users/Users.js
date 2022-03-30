import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Users = () => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <h1>Users Area</h1>
            <p>Number of Friends I have: {users.length}</p>
            {
                users.map(user => <User user={user}
                    key={user.id}></User>)
            }
        </div>
    );
};

export default Users;