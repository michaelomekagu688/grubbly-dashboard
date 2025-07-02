import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './users.scss'

const Users = () => {
    return (
        <div className="users"> 
            <Sidebar />
            <div className="users-cont">
                <Navbar/>
                <div className='first-cont'> 
                    <div className='top'>
                        <div className='left'>
                            <img src='https://i.pinimg.com/736x/10/4d/85/104d859e3a1e9b7484453d5678f4fd15.jpg'
                            alt='images'
                            className='beauty-img'
                            />
                            <div className='inners'>
                                <h2> Jane Doe</h2>
                                <div> Email: +234 7034 4567 05 </div>
                                <div> Address: Eiton St. 234 Garden New York</div>
                                <div> Country: USA </div>
                            </div>
                        </div>
                        <div className='right'></div>
                    </div>
                    <div className='bottom'></div>
                </div>
            </div>
        </div>
  )
}

export default Users