


import React from 'react'
import './navbar.scss'
import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListAltOutlined, NotificationsNoneOutlined, SearchOutlined } from '@mui/icons-material'

function Navbar(){
    return(
        <div className='navbar-cont'> 
            <div className='first-div'>
                <input type='text' placeholder='Search...' />
                <SearchOutlined className='icon' />
            </div>
            <div className='second-div'>
                <div className='inner'>
                    <LanguageOutlined className='icon' />
                    <div> English </div>
                </div>
                <div className='inner'>
                    <DarkModeOutlined className='icon' />
                </div>
                <div className='inner'>
                    <FullscreenExitOutlined className='icon' />
                </div>
                <div className='inner'>
                    <NotificationsNoneOutlined className='icon' />
                    <div className='counter'> 1 </div>
                </div>
                <div className='inner'>
                    <ChatBubbleOutlineOutlined className='icon' />
                    <div className='counter'> 2 </div>
                </div>
                <div className='inner'>
                    <ListAltOutlined className='icon' />
                </div>
                <div className='inner'>
                    <img
                    src='https://i.pinimg.com/736x/d3/62/a3/d362a353a21bf86a1d6a4cb10063cece.jpg'
                    alt='profile'
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar