
import React from "react";
import './featured.scss'
import { KeyboardArrowDown, KeyboardArrowUp, MoreVert } from "@mui/icons-material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Featured(){
    return(
        <div className="featured-cont">
            <div className="top">
                <div className="top-text"> Total Revenue </div>
                <MoreVert />
            </div>
            <div className="bottom">
                <div className="featuredChart"> 
                    <CircularProgressbar value={70} text="70%" strokeWidth={6} />   
                </div>
                <p className="total-text"> Total sales made today </p>
                <span> $420 </span>
                <p> Previous transaction processing. Last payments may not be concluded</p>
                <div className="target-cont"> 
                    <div className="targets-div">
                        <div className="targets-tp"> Target </div>
                        <div className="targets-dwn negative"> 
                            <KeyboardArrowUp />
                            <div> $12.4k </div>
                        </div>
                    </div>
                    <div className="targets-div">
                        <div className="targets-tp"> Target </div>
                        <div className="targets-dwn positive"> 
                            <KeyboardArrowDown />
                            <div> $12.4k </div>
                        </div>
                    </div>
                    <div className="targets-div">
                        <div className="targets-tp"> Target </div>
                        <div className="targets-dwn positive"> 
                            <KeyboardArrowUp />
                            <div> $12.4k </div>
                        </div>
                    </div>
                   

                </div>

            </div>
        </div>
    )
}

export default Featured