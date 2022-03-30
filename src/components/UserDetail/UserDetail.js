import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    // const params = useParams()
    const { userId } = useParams()

    const [user, setUser] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [userId])

    return (
        <div>
            {/* <h1>Detail of User: {sparams.userId}</h1> */}
            <h1>Detail of User: {userId}</h1>
            <h2>Name: {user.name}</h2>
            <h2>Email {user.email}</h2>
            <h4> website{user.website}</h4>
            <h5>Phone: {user.phone}</h5>
            <h5>address: {user?.address?.city}</h5>
            <p><small>Latitude: {user?.company?.catchPhrase}</small></p>
        </div>
    );
};

export default UserDetail;