import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {

    const { postID } = useParams()
    const [post, setPost] = useState()
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postID}`
        fetch(url)
            .then(response => response.json())
            .then(data => setPost(data))
    }, [postID])

    return (
        <div>
            <h1>Post detail for: {postID}</h1>
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
        </div>
    );
};

export default PostDetail;