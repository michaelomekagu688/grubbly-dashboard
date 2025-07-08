

import React from "react";
import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Tables(){
    
    
    
    function createData(
      name,
      calories,
      fat,
      protein,
      methods,
      status,
    ) {
      return { name, calories, fat, protein, methods, status };
    }


        
    const rows = [
    createData(1143155, 'Acer Nitro', 'John smith', 785,'Cash on Delivery', 'Approved'),
    createData(2235235, 'Play Station 5', 'Michael Doe', 900,'Online Payment', 'Pending'),
    createData(2342353, 'Redragon S101', 'John Smith', 35,'Online Payment', 'Pending'),
    createData(2357741, 'Razor Blade 15', 'Jane Smith', 920,'Online', 'Approved'),
    createData(2342355, 'ASUS ROG Strike', 'Harold Carol', 2000,'Online', 'Pending'),
    ];

    return(
        <div className="table">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 300 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Tracking ID </TableCell>
                            <TableCell >Produc </TableCell>
                            <TableCell >Customer </TableCell>
                            <TableCell > Amount </TableCell>
                            <TableCell > Payment Method </TableCell>
                            <TableCell > Status </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell>{row.calories}</TableCell>
                        <TableCell>{row.fat}</TableCell>
                        <TableCell>{row.protein}</TableCell>
                        <TableCell>{row.methods}</TableCell>
                        <TableCell>{row.status}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
        </div>
    )
}

export default Tables