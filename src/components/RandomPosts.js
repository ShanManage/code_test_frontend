import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomPosts = () => {

    const [picsumPhotos, setpicsumPhotos] = useState()

    useEffect(() => {
        axios.get('https://picsum.photos/v2/list?page=1&limit=10')
            .then(
                (response) => {
                    setpicsumPhotos(response.data)
                },
                (error) => {
                    console.log(error);
                }
            );
    }, [])

    return (
        <div className='p-0 col-md-3'>
            <div className='fs-4 random_containerne'>Lorem <br></br> Picsum Posts</div>
            <div>
                {
                    picsumPhotos && picsumPhotos.map((photo, index) => (
                        <div key={index} className="random-img my-4 d-flex align-items-end" style={{ backgroundImage: `url(${photo.download_url})` }}>
                            <div className="ps-2" style={{ color: 'white' }}>{photo.author}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default RandomPosts;
