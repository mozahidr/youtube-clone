import React from 'react';
import './Navbar.css';
import { NotificationsNone, Language, Settings } from '@mui/icons-material';
import avatar from '../../images/avatar.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbarWrapper'>
            <div className='navLeft'>
                <Link to='/' className='link'><span className='logo'>React Admin</span></Link>
            </div>
            <div className='navRight'>
                <div className='navIconContainer'>
                    <NotificationsNone />
                    <span className='topIconBad'>2</span>
                </div>
                <div className='navIconContainer'>
                    <Language />
                </div>
                <div className='navIconContainer'>
                    <Settings />
                </div>
                    <img src={avatar} alt="" className='navAvatar' />
            </div>
        </div>
    </div>
  )
}
