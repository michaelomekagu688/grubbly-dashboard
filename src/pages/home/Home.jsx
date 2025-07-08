

import React from 'react'
import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widgets/widget'
import Featured from '../../components/featured/Featured'
import Charts from '../../components/charts/Charts'
import Tables from '../../components/table/Tables'
import Smallside from '../../components/Smallside/Smallside'
import { Box } from '@mui/material'


function Home(){
    return(
        <div className='home'>
            <Sidebar />
            <Box sx={{
                display: {
                    xs:"block",
                    md:"none",
                }
            }}>
                <Smallside />
            </Box>
            <div className='homeContainer'>
                <Navbar />
                <div className='widget-cont'> 
                    <Widget type="user" />
                    <Widget type="orders"  />
                    <Widget type="earnings" />
                    <Widget type="balance" />
                </div>
                <div className='fnc'> 
                    <Featured />
                    <Charts aspect={2/1} />
                </div>
                <div className='table-cont'>
                    <Tables />
                </div>
            </div>
        </div>
    )
}

export default Home