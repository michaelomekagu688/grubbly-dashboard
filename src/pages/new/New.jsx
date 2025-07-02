
import React from "react";
import Sidebar from '../../components/sidebar/Sidebar'
import './new.scss'
import Navbar from "../../components/navbar/Navbar";
import { DataGrid} from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';



const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', Email: "1snow@gmail.com", age: 35, Status: "active" },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei',  Email: "1snow@gmail.com", age: 42,Status: "active" },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime',  Email: "2snow@gmail.com", age: 45, Status: "pasive" },
  { id: 4, lastName: 'Stark', firstName: 'Arya',  Email: "3snow@gmail.com", age: 16, Status: "pending" },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys',  Email: "4snow@gmail.com", age: null, Status: "active" },
  { id: 6, lastName: 'Melisandre', firstName: null,  Email: "5snow@gmail.com", age: 150, Status: "passive",  },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara',  Email: "6snow@gmail.com", age: 44, Status: "pending" },
  { id: 8, lastName: 'Frances', firstName: 'Rossini',  Email: "7snow@gmail.com", age: 36, Status: "active" },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey',  Email: "8snow@gmail.com", age: 65, Status: "active" },
];

const columns  = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'User',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
    renderCell: (params) => {
        return(
            <div className="img-wrapper">
                <img src="https://i.pinimg.com/736x/76/2b/fb/762bfb719977f38756da9b51ccd1a93e.jpg"
                alt="img"
                className="imgs"
                />
                <span> {params.row.firstName || ''}  {params.row.lastName || ''} </span>
            </div>
        )
    }
  },
  { field: 'Email', headerName: 'Email', width: 250 },
  { field: 'age', headerName: 'Age', width: 130 },
  {
    field: 'Status',
    headerName: 'Status',
    width: 90,
     renderCell: (params) => {
        return(
            <div> {params.row.Status} </div>
        )
    }
  },
];

const paginationModel = { page: 0, pageSize: 5 };




function Login(){


    return(
        <div className="new"> 
            <Sidebar />
            <div className="new-cont">
                <Navbar/>
                <div className="id-sec"> 
                     <Paper sx={{ height: 400, }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            initialState={{ pagination: { paginationModel } }}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection
                            sx={{ border: 0 }}
                        />
                    </Paper>
                 </div>
            </div>
            
        </div>
    )
}

export default Login