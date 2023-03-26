import React, { useContext, useState, useEffect } from 'react';
import './MovieList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { ProductRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { Navbar, Sidebar } from '../index';
import { MovieContext } from '../../Context/MovieContext/MovieContext';
import { deleteMovie, getMovies } from '../../Context/MovieContext/ApiCalls';
import { toast, ToastContainer } from 'react-toastify';

export const MovieList = () => {
  const [data, setData] = useState(ProductRows);
  const { movies, dispatch } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteMovie(id, dispatch);
    toast.success("Delete Success !", {
      position: toast.POSITION.BOTTOM_CENTER
    });
  };

  console.log(movies);

  const columns = [
    { field: '_id', headerName: 'ID', width: 150 },
    {
      field: 'movie',
      headerName: 'Movie',
      width: 300,
      editable: true,
      renderCell: (params) => {
        return (
          <div className="productListName">
            <img
              src={params.row.img}
              alt="profile"
              className="productListImg"
            />
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: 'genre',
      headerName: 'Genre',
      width: 120,
    },
    {
      field: 'year',
      headerName: 'Year',
      width: 90,
    },
    {
      field: 'limit',
      headerName: 'Limit',
      width: 90,
    },
    {
      field: 'isSeries',
      headerName: 'IsSeries',
      width: 120,
    },
    
    {
      field: 'action',
      headerName: 'Action',
      width: 100,
      renderCell: (params) => {
        return (
          <>
            <Link to={{ pathname: '/movie/' + params.row._id, movie: params.row }}>
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
            rows={movies}
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
