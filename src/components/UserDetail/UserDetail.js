import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    const params = useParams()
    return (
        <div>
            <h1>Detail of User: {params.userId}</h1>
        </div>
    );
};

export default UserDetail;