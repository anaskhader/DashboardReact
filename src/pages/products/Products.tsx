import { GridColDef } from "@mui/x-data-grid";
import Add from "../../components/add/Add"
import DataTable from "../../components/dataTable/DataTable"
import "./products.scss"
import React, { useState } from "react"
import { products, userRows } from "../../data";
const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'img', headerName: 'Avatar', width: 100,
        renderCell: (params) => {
            return <img src={params.row.img} alt="" />
        }
    },


    {
        field: 'title',
        headerName: 'Title',
        type: 'string',
        width: 200,

    },
    {
        field: 'price',
        headerName: 'Price',
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
        field: 'instock',
        headerName: 'In-Stock',
        type: 'boolean',
        width: 150,

    }];


const Products = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="products">
            <div className="info">
                <h1>Products</h1>
                <button onClick={() => setOpen(true)}>Add New Products</button>

            </div>
            <DataTable slug="products" columns={columns} rows={products} />
            {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
        </div>
    )

}
export default Products