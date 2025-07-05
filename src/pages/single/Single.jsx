import React from "react";
import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from "../../components/navbar/Navbar";
import { AddAPhoto } from "@mui/icons-material"
import Input from "../../components/inputs/Input";

function Single({input,titles}){


    return(

        <div className="single"> 
            <div className="single-cont">
                <Sidebar />
                <div className="single-wrapper">
                    <Navbar />
                    <div className="single-sec">
                        <div className="top"> {titles} </div>
                        <div className="bottom">  
                            <div className="left">
                                <AddAPhoto className="photo-icon" />
                            </div>
                            <div className="right">
                                <div className="input-div">
                                    <Input input={input} />
                                </div>
                                <div className="btn-div">
                                    <button className="btn"> send </button>
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