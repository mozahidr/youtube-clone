import React, { useContext, useEffect, useState } from 'react';
import './NewList.css';
import { Navbar, Sidebar } from '../index';
import { getMovies } from '../../Context/MovieContext/ApiCalls';
import { ListContext } from '../../Context/ListContext/ListContext';
import { MovieContext } from '../../Context/MovieContext/MovieContext';
import { toast, ToastContainer } from 'react-toastify';
import { createList } from '../../Context/ListContext/ApiCalls';
import { useNavigate } from 'react-router-dom';

export const NewList = () => {
  const [list, setList] = useState(null);
  const navigate = useNavigate();

  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchmovie } = useContext(MovieContext);

  // GET MOVIE LISTs
  useEffect(() => {
    getMovies(dispatchmovie);
  }, [dispatchmovie]);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };
  // CREATE NEW LIST
  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list, dispatch);
    toast('List Created Successfully', {
      position: toast.POSITION.BOTTOM_CENTER,
      className: 'foo-bar',
    });
    navigate('/lists');
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="newMovie">
          <h1 className="addProductTitle">New Movie</h1>
          <form className="addProductForm">
            <div className='formLeft'>
            <div className="addProductItem">
              <label>Title</label>
              <input
                type="text"
                placeholder="Best Action Moives"
                name="title"
                required
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Genre</label>
              <input
                type="text"
                placeholder="action"
                name="genre"
                required
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Type</label>
              <select required name="type" onChange={handleChange}>
                <option>Type</option>
                <option value="movie">Movie</option>
                <option value="series">Series</option>
              </select>
            </div>
            </div>
            <div className='formRight'>
            <div className="addProductItem">
              <label>Content</label>
              <select
                multiple
                name="content"
                required
                onChange={handleSelect}
                style={{ height: '280px' }}
              >
                {movies.map((movie) => (
                  <option key={movie._id} value={movie._id}>
                    {movie.title}
                  </option>
                ))}
              </select>
              <small style={{ paddingTop: '8px'}}>Use shift to select multiple moives</small>
            </div>
            </div>
            <button className="addProductButton" onClick={handleSubmit}>Create</button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </>
  );
};
