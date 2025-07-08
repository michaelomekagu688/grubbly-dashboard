
import { AccountCircleTwoTone, AirportShuttle, Dashboard, ExitToAppOutlined, HealthAndSafetyOutlined, NotificationsNoneOutlined, Payment, PermIdentity, ProductionQuantityLimits, PsychologyAltOutlined, QueryStatsOutlined, SettingsOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import './smallside.scss'

const Smallside = () => {
  return (
    <div>
          <div className='smallside-cont'>
                <li className='names'>
                    <div> G </div>
                    <div> r </div>
                    <div> u </div>
                    <div> b </div>
                    <div> b </div>
                    <div> l </div>
                    <div> y </div>
                </li>
                 <ul>
                    <li>
                        <Link className='link' to={"/"}>
                            <Dashboard className='icons' />
                        </Link>
                    </li>
                    <li>
                        <Link className='link' to={"/input"}>
                                <PermIdentity className='icons' />
                        
                        </Link>
                    </li>
                    <li>
                        <Link to={"/product"} className='link'>
                                <ProductionQuantityLimits className='icons' />
                        </Link>
                    </li>
                    <li>
                        <Link to={"/new"} className='link'>
                                <Payment className='icons' />
                        </Link>
                    </li>
                    <li>
                        <Link to={"/users"} className='link'>
                                <QueryStatsOutlined className='icons' />
                        </Link>
                    </li>
                    <li>
                        <AirportShuttle className='icons' />
                    </li>
                    <li>
                        <NotificationsNoneOutlined className='icons' />
                    </li>
                    <li>
                        <HealthAndSafetyOutlined className='icons' />
                    </li>
                    <li>
                        <PsychologyAltOutlined className='icons' />
                    </li>
                    <li>
                        <SettingsOutlined className='icons' />
                    </li>
                    <li>
                        <AccountCircleTwoTone className='icons' />
                    </li>
                    <li>
                        <ExitToAppOutlined className='icons' />
                    </li>
                </ul>
            </div>
    </div>
  )
}

export default Smallside