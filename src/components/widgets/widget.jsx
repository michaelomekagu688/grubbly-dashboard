

import React from "react"
import './widget.scss'
import { AccountBalanceWalletOutlined, KeyboardArrowUp, MonetizationOnOutlined, PermIdentityOutlined, ShoppingCartOutlined } from "@mui/icons-material"


function Widget( {type} ){

    let data;
    let amount = 100;
    let diff = 20;

    switch (type) {
        case "user":
            data={
                title:"USERS",
                text:"See all users",
                isMoney: false,
                image:<PermIdentityOutlined className="icon-2-1" />
            }
            break;
        case "orders":
            data={
                title:"ORDERS",
                text:"View all orders",
                 isMoney: false,
                image:<ShoppingCartOutlined className="icon-2-2" />
            }
            break;
        case "earnings":
            data={
                title:"EARNINGS",
                text:"View net earnings",
                 isMoney: true,
                image:<MonetizationOnOutlined className="icon-2-3" />
            }
            break;
        case "balance":
            data={
                title:"BALANCE",
                text:"See details",
                 isMoney: true,
                image:<AccountBalanceWalletOutlined className="icon-2-4" />
            }
            break;
        default:
            break;
    }



    return(
        <div className="widget">
            <div className="left" >
                <div> {data.title} </div>
                <div> {data.isMoney && '$'} {amount} </div>
                <div> {data.text} </div>
            </div> 
            <div className="right" >
                <div className="prim"> 
                    <KeyboardArrowUp className="icon-1" />
                    <div> {diff}% </div>
                 </div>
                 {data.image}
             </div>
        </div>
    )
}

export default Widget