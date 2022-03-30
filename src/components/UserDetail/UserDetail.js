import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    // const params = useParams()
    const { userId } = useParams()
    return (
        <div>
            {/* <h1>Detail of User: {sparams.userId}</h1> */}
            <h1>Detail of User: {userId}</h1>
        </div>
    );
};

export default UserDetail;