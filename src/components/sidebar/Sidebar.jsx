

import React from 'react'
import { AccountCircleTwoTone, AirportShuttle, Dashboard, ExitToAppOutlined, HealthAndSafetyOutlined, NotificationsNoneOutlined, Payment, PermIdentity, ProductionQuantityLimits, PsychologyAltOutlined, QueryStatsOutlined, SettingsOutlined } from '@mui/icons-material';
import './sidebar.scss'
import { Link } from 'react-router-dom';


function sidebar(){
    return(
        <div className='sidebar' >
            <div className='logo'> Grubbly </div>
            <hr />
            <div className='listss'>
                <ul>
                    <p> MAIN  </p>
                    <Link className='link' to={"/"}>
                        <li>
                            <Dashboard className='icons' />
                            <span> Dashboard </span>
                        </li>
                    </Link>
                    <p> LISTS </p>
                    <Link className='link' to={"/input"}>
                        <li>
                            <PermIdentity className='icons' />
                            <span> Users </span>
                        </li>
                    
                    </Link>
                    <Link to={"/product"} className='link'>
                        <li>
                            <ProductionQuantityLimits className='icons' />
                            <span> Products </span>
                        </li>
                    </Link>
                    <Link to={"/new"} className='link'>
                        <li>
                            <Payment className='icons' />
                            <span> Orders </span>
                        </li>
                    </Link>
                    <li>
                        <AirportShuttle className='icons' />
                        <span> Delivery </span>
                    </li>
                     <p> USEFUL </p>
                    <Link to={"/users"} className='link'>
                        <li>
                            <QueryStatsOutlined className='icons' />
                            <span> Stats </span>
                        </li>
                     </Link>
                    <li>
                        <NotificationsNoneOutlined className='icons' />
                        <span> Notifications </span>
                    </li>
                     <p> SERVICE </p>
                    <li>
                        <HealthAndSafetyOutlined className='icons' />
                        <span> System Health </span>
                    </li>
                    <li>
                        <PsychologyAltOutlined className='icons' />
                        <span> Logs </span>
                    </li>
                    <li>
                        <SettingsOutlined className='icons' />
                        <span> Settings </span>
                    </li>
                     <p> USER </p>
                    <li>
                        <AccountCircleTwoTone className='icons' />
                        <span> Profile </span>
                    </li>
                    <li>
                        <ExitToAppOutlined className='icons' />
                        <span> Logout </span>
                    </li>
                </ul>
            </div>
            <div className='themeing' >
                <div className='pallettes'></div>
                <div className='pallettes'></div>
            </div>
        </div>
    )
}

export default sidebar