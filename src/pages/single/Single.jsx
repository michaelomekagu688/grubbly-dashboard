import React from "react";
import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from "../../components/navbar/Navbar";
import { AddAPhoto } from "@mui/icons-material";

function Single(){
    return(
        <div className="single"> 
            <div className="single-cont">
                <Sidebar />
                <div className="single-wrapper">
                    <Navbar />
                    <div className="single-sec">
                        <div className="top"> Add New User </div>
                        <div className="bottom">  
                            <div className="left">
                                <AddAPhoto className="photo-icon" />
                            </div>
                            <div className="right">
                                <div className="inner-right">
                                    <label> Name and Surname</label>
                                    <input type="text" placeholder="John Doe" />
                                </div>
                                <div className="inner-right">
                                    <label> Name and Surname</label>
                                    <input type="text" placeholder="John Doe" />
                                </div>
                                <div className="inner-right">
                                    <label> Name and Surname</label>
                                    <input type="text" placeholder="John Doe" />
                                </div>
                                <div className="inner-right">
                                    <label> Name and Surname</label>
                                    <input type="text" placeholder="John Doe" />
                                </div>
                                <div className="inner-right">
                                    <label> Name and Surname</label>
                                    <input type="text" placeholder="John Doe" />
                                </div>
                                <div className="inner-right">
                                    <label> Name and Surname</label>
                                    <input type="text" placeholder="John Doe" />
                                </div>
                                <div className="inner-right">
                                    <label> Name and Surname</label>
                                    <input type="text" placeholder="John Doe" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Single