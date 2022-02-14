import React, { useState, useEffect } from 'react'
import MyPosts from './MyPosts'
import CreateNewPost from './CreateNewPost'
import api from '../axiosContact'

const Posts = () => {

    const [posts, setposts] = useState([]);

    const fetchPosts = () => {
        api.get("/getPosts")
            .then((res) => {
                if (!res.data.error) {
                    setposts(res.data.data)
                }
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    useEffect(() => {
        fetchPosts();
    }, [])


    return (
        <div className="p-0 col-md-7 d-flex justify-content-center post-container">
            <div>
                <CreateNewPost fetchPosts={fetchPosts} />
                <MyPosts posts={posts} fetchPosts={fetchPosts} />
            </div>
        </div>
    );
}

export default Posts