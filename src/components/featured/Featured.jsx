
import React from "react";
import './featured.scss'
import { MoreVert } from "@mui/icons-material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Featured(){
    return(
        <div className="featured-cont">
            <div className="top">
                <div> Total Revenue </div>
                <MoreVert />
            </div>
            <div className="bottom">
                <div className="featuredChart"> 
                    <CircularProgressbar value={70} text="70%" strokeWidth={6} />   
                </div>

            </div>
        </div>
    )
}

export default Featured