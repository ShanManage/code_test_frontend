import React, { useState, useEffect } from 'react';
import { ImUser } from "react-icons/im";
import axios from 'axios';

const Contacts = () => {

    const [contacts, setcontacts] = useState()

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(
                (response) => {
                    setcontacts(response.data)
                },
                (error) => {
                    console.log(error);
                }
            );
    }, [])

    return (
        <div className='p-0 col-md-2 contact_container'>
            <div>
                <div className='mb-4 fs-3'>Contacts</div>
                <div>
                    {
                        contacts && contacts.map((contact, index) => (
                            <div className='d-flex mb-3 align-items-center'>
                                {/* <img className='user-img' src="paris.jpg" alt="Paris" /> */}
                                <ImUser size={40} />
                                <div className='ms-4'>
                                    <div>{contact.username}</div>
                                    <div>{contact.email}</div>
                                    <div>{contact.phone}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Contacts;
