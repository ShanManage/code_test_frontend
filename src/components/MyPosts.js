import React from 'react';
import { MdCancel } from "react-icons/md";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
import api from '../axiosContact';
// import iii from '../assets/logo.jpeg'

const MyPosts = (props) => {

    const likeOrDislike = (isLike, postId) => {
        api.post('/addLikeOrDislike', {
            postId: postId,
            isLike: isLike
        })
            .then((res) => {
                if (!res.data.error) {
                    props.fetchPosts();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const deletePost = (id) => {
        if (window.confirm('Delete the Post?')) {
            api.delete('/deletePost/' + id)
                .then((res) => {
                    if (!res.data.error) {
                        props.fetchPosts();
                    }
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
    }

    return (
        <div>
            <div className='mt-3 fs-3'>My Posts</div>
            {
                props.posts && props.posts.map((post, index) => (
                    <div key={index} className='border border-dark p-3 mt-3'>
                        <img className='mypost-img' src={`http://localhost:8000/${post.imagePath}`} alt={post.imagePath} />
                        <div className='my-2 fs-5'>{post.postTitle}</div>
                        <p>{post.description}</p>
                        <div className='row p-0 m-0'>
                            <div className='p-0 col-md-4 d-flex align-items-center gap-2'>
                                <MdCancel size={24} color='#B33030' onClick={() => { deletePost(post._id) }} />
                                <div>Remove</div>
                            </div>
                            <div className='p-0 col-md-8 d-flex justify-content-end align-items-center gap-4'>
                                <div className='d-flex align-items-center gap-2'>
                                    <AiTwotoneLike size={22} onClick={() => { likeOrDislike(1, post._id) }} />
                                    <div>{post.likes} Likes</div>
                                </div>
                                <div className='d-flex align-items-center gap-2'>
                                    <AiTwotoneDislike size={22} onClick={() => { likeOrDislike(0, post._id) }} />
                                    <div>{post.dislikes} Disikes</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default MyPosts;
