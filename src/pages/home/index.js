import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import working from '../../assets/images/working.png';

const Home = () => {
    return (
        <div id='loginPage' className='bg-yellow'>
            <div className='conatiner loginPage vhContainer '>
                <div className='side'>
                    <a href='#'>
                        <img className='logoImg' src={logo} alt='LogoImg' />
                    </a>
                    <img className='d-m-n' src={working} alt='workImg' />
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default Home;