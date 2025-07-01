

import React from "react";
import './charts.scss';
import { XAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

function Charts(){
    const data = [
        {name: "John Smith", total: 2000},
        {name: "Michael Doe", total: 800},
        {name: "Darwin Parker", total: 1600},
        {name: "Jane Smith", total: 900},
        {name: "Harold Carol", total: 1700},
    ];


    return(
        <div className="charts-div"> 
            <div className="title-div"> Last 6 Months (Revenue) </div>
            <ResponsiveContainer width={"100%"} aspect={2/1}>                                             
                <AreaChart width={730} height={350} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="total" className="chartsLine" />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Charts