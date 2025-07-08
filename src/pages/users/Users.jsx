import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './users.scss'
import Charts from '../../components/charts/Charts'
import Tables from '../../components/table/Tables'
import { Box } from '@mui/material'
import Smallside from '../../components/Smallside/Smallside'

const Users = () => {
    return (
        <div className="users"> 
            <Sidebar />
             <Box sx={{
                display: {
                    xs:"block",
                    md:"none",
                }
            }}>
                <Smallside />
            </Box>
            <div className="users-cont">
                <Navbar/>
                <div className='first-cont'> 
                    <div className='top'>
                        <div className='left'>
                            <div className='inner-top'>
                                <div className='info'> Information </div>
                                <div className='edit'> Edit </div>
                            </div>
                            <div className='inner-bottom'>
                                <img src='https://i.pinimg.com/736x/10/4d/85/104d859e3a1e9b7484453d5678f4fd15.jpg'
                                alt='images'
                                className='beauty-img'
                                />
                                <div className='inners'>
                                    <h2> Jane Doe</h2>
                                    <div> Email : jaredhegin2@gmail.com </div>
                                    <div> Phone No. : +234 7034 4567 05 </div>
                                    <div> Address: Eiton St. 234 Garden New York</div>
                                    <div> Country: USA </div>
                                </div>
                            </div>
                        </div>
                        <div className='right'>
                            <Charts aspect={3/1} />
                        </div>
                    </div>
                    <div className='bottom'>
                        <Tables />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Users