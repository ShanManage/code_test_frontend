import React, { useState, useRef } from 'react';
import api from '../axiosContact';

const CreateNewPost = ({ fetchPosts }) => {

    const [title, settitle] = useState()
    const [description, setdescription] = useState()
    const [file, setfile] = useState(null)
    const [errors, seterrors] = useState({})
    const fileRef = useRef(null);

    const clearInputs = () => {
        settitle('')
        setdescription('')
        setfile(null)
        fileRef.current = null;
    }

    const validate = () => {
        let errors = {}

        // Title
        if (!title) {
            errors.title = 'Title required'
        }

        // Description
        if (!description) {
            errors.description = 'Description required'
        }

        // File
        if (!file) {
            errors.file = 'Image required'
        }

        if (!file?.name.match(/\.(jpg|jpeg|png)$/)) {
            errors.file = 'Please select valid image.'
        }

        return errors;
    }

    const addNewPost = (e) => {
        e.preventDefault()
        const isValid = validate()
        // console.log(isValid)
        if (isValid.title || isValid.description || isValid.file) {
            seterrors(isValid)
        } else {
            const data = new FormData();

            data.append('title', title);
            data.append('description', description);
            data.append('file', file);

            api.post('/createPost', data)
                .then((res) => {
                    if (!res.data.error) {
                        seterrors({})
                        alert('Successfully created post');
                        clearInputs();
                        fetchPosts();
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }

    return (
        <div className='border border-dark p-3'>
            <div className='fs-5 mb-3'>New Post</div>
            <div className='field'>
                <input
                    className="p-2 mb-2"
                    type="text"
                    placeholder='Title'
                    value={title}
                    onChange={(e) => {
                        settitle(e.target.value);
                    }}
                />
                {errors.title && <p style={{ color: 'rgb(208, 0, 0)' }}>{errors.title}</p>}
            </div>
            <div className='field'>
                <textarea
                    className="p-2 mb-2"
                    type="text"
                    placeholder='Write something...'
                    value={description}
                    onChange={(e) => {
                        setdescription(e.target.value);
                    }}
                />
                {errors.description && <p style={{ color: 'rgb(208, 0, 0)' }}>{errors.description}</p>}
            </div>
            <div className='row p-0 m-0'>
                <div className='p-0 col-9'>
                    <div className='d-flex align-items-center gap-2'>
                        <div>Select image</div>
                        <div>
                            <input
                                ref={fileRef}
                                className=""
                                type="file"
                                name="file"
                                onChange={(e) => {
                                    setfile(e.target.files[0]);
                                }}
                            />
                        </div>
                    </div>
                    {errors.file && <p style={{ color: 'rgb(208, 0, 0)' }}>{errors.file}</p>}
                </div>
                <div className='p-0 col-3 d-flex justify-content-end align-items-center'>
                    <button type="button" className='btn btn-outline-primary px-3' onClick={addNewPost}>Post</button>
                </div>
            </div>
        </div>
    );
};

export default CreateNewPost;
