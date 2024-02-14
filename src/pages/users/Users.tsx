import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable"
import "./users.scss"
import React, { useState } from "react"
import { userRows } from "../../data";
import Add from "../../components/add/Add";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'img', headerName: 'Avatar', width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || "./noavatar.png"} alt="" />
        }
    },

    {
        field: 'firstName',
        headerName: 'First name',
        type: 'string',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        type: 'string',
        width: 150,
        editable: true,
    },
    {
        field: 'email',
        headerName: 'Email',
        type: 'string',
        width: 200,

    },
    {
        field: 'phone',
        headerName: 'Phone',
        type: 'string',
        width: 150,

    },
    {
        field: 'createdAt',
        headerName: 'Created At',
        type: 'string',
        width: 200,

    },
    {
        field: 'verified',
        headerName: 'Verified',
        type: 'boolean',
        width: 150,

    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },

    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    { field: 'status', headerName: 'Status', width: 100, type: 'boolean', },

];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14, status: 'true' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31, status: 'true' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
const Users = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="users">
            <div className="info">
                <h1>Users</h1>
                <button onClick={() => setOpen(true)}>Add New User</button>

            </div>
            <DataTable slug="users" columns={columns} rows={userRows} />
            {open && <Add slug="users" columns={columns} setOpen={setOpen} />}
        </div>
    )
}

export default Users