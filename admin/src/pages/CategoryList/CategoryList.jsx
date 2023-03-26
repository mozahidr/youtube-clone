import React, { useContext, useState, useEffect } from 'react';
import './CategoryList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { ProductRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { Navbar, Sidebar } from '../index';
import { toast, ToastContainer } from 'react-toastify';
import { ListContext } from '../../Context/ListContext/ListContext';
import { deleteLists, getLists } from '../../Context/ListContext/ApiCalls';

export const CategoryList = () => {
  const [data, setData] = useState(ProductRows);
  const { lists, dispatch } = useContext(ListContext);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteLists(id, dispatch);
    toast("Delete Success !", {
      position: toast.POSITION.BOTTOM_CENTER
    });
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 200 },
    {
      field: 'title',
      headerName: 'Title',
      width: 300,
    },
    {
      field: 'genre',
      headerName: 'Genre',
      width: 150,
    },
    {
      field: 'content',
      headerName: 'Content',
      width: 200,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 100,
      renderCell: (params) => {
        return (
          <>
            <Link to={{ pathname: '/list/' + params.row._id, list: params.row }}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
            <ToastContainer />
          </>
        );
      },
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="productList">
          <DataGrid
            rows={lists}
            columns={columns}
            checkboxSelection
            disableSelectionOnClick
            pageSize={8}
            rowsPerPageOptions={[10]}
            getRowId={(r) => r._id}
          /> 
        </div>
      </div>
    </>
  );
};
