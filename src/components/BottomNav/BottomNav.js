import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeOutlined, ChatBubbleOutlineOutlined, AccountBalanceOutlined, FavoriteBorderOutlined, SettingsApplicationsOutlined } from '@mui/icons-material';
import './BottomNav.css';


const BottomNav = () => {
    return (
        <footer className='bottomNav'>
            <ul>
                <li>
                    <NavLink to='/'>
                        <HomeOutlined className='icon'/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/chat'>
                        <ChatBubbleOutlineOutlined />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/wallet'>
                        <AccountBalanceOutlined />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/favourite'>
                        <FavoriteBorderOutlined />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/settings'>
                        <SettingsApplicationsOutlined />
                    </NavLink>
                </li>
            </ul>
        </footer>
    )
}

export default BottomNav