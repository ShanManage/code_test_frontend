import React from 'react';
// import * as Icon from 'react-bootstrap-icons'
import { IoSettings, IoNotificationsCircleSharp } from 'react-icons/io5';
import { MdMessage } from 'react-icons/md';
import { FaUser } from "react-icons/fa";
import Logo from '../assets/logo.jpeg';

const TopBar = () => {
    return (
        // <div className='row m-0 px-5 py-1' style={{ backgroundColor: '#F0F0F0' }}>
        //     <div className='p-0 col-4 d-flex align-items-center gap-3'>
        //         <IoSettings size={24} />
        //         <IoNotificationsCircleSharp size={24} />
        //         <MdMessage size={24} />
        //     </div>
        //     <div className='p-0 col-4 d-flex justify-content-center align-items-center'>
        //         <img className='logo' src={Logo} alt="Paris" />
        //     </div>
        //     <div className='p-0 col-4 d-flex justify-content-end align-items-center gap-2'>
        //         <div className='fs-5'>Ishara Lakshan</div>
        //         <FaUser size={24} />
        //     </div>
        // </div>

        <div className='d-flex px-5 py-1 justify-content-between mb-3' style={{ backgroundColor: '#F0F0F0' }}>
            <div className='d-flex align-items-center item-gap'>
                <IoSettings size={24} />
                <IoNotificationsCircleSharp size={24} />
                <MdMessage size={24} />
            </div>
            <div className=''>
                <img className='logo' src={Logo} alt="Paris" />
            </div>
            <div className='d-flex align-items-center gap-2'>
                <div className='username'>Ishara Lakshan</div>
                <FaUser size={24} />
            </div>
        </div>
    );
};

export default TopBar;
