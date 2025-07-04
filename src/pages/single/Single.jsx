import React from "react";
import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from "../../components/navbar/Navbar";
import { AddAPhoto } from "@mui/icons-material"
import Input from "../../components/inputs/Input";
import { InputValue } from "../../SingleDataSource";
import { ProductValue } from "../../SingleDataSource";


function Single(){

    let head = 'Add New Users';
    let products = 'Add New Products';

    return(

        <div className="single"> 
            <div className="single-cont">
                <Sidebar />
                <div className="single-wrapper">
                    <Navbar />
                    <div className="single-sec">
                        <div className="top"> {head} </div>
                        <div className="bottom">  
                            <div className="left">
                                <AddAPhoto className="photo-icon" />
                            </div>
                            <div className="right">
                                <div className="input-div">
                                    <Input ProductValue={ProductValue} />
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