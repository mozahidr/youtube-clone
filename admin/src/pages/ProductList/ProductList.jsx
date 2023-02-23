import React, { useState } from 'react';
import './ProductList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { ProductRows } from '../../dummyData';
import { Link } from 'react-router-dom';

export const ProductList = () => {
  const [data, setData] = useState(ProductRows);

  const handleDelete = (id) => {
    setData(data.filter((product) => product.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'name',
      headerName: 'Name',
      width: 250,
      editable: true,
      renderCell: (params) => {
        return (
          <div className="productListName">
            <img
              src={params.row.img}
              alt="profile"
              className="productListImg"
            />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: 'stock',
      headerName: 'Stock',
      width: 120,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 150,
      editable: true,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/product/' + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={data}
        columns={columns}
        checkboxSelection
        disableSelectionOnClick
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};
