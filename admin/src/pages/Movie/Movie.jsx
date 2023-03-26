import React, { useState, useEffect} from 'react';
import './Movie.css';
import { Link, useLocation } from 'react-router-dom';
import airpod from '../../images/airpod.jpeg';
import { Publish } from '@mui/icons-material';
import { Navbar, Sidebar } from '../index';
import axios from 'axios';

export const Movie = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get('/movies/find/' + path, {
        headers: {
          token: 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      setMovie(response.data);
    }
    fetchMovie();
  }, [path]);

  
  return (
    <>
    <Navbar />
      <div className="container">
        <Sidebar />
      <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newMovie">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
       
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={movie?.img} alt="product" className="productInfoImg" />
            <span className="productName">{movie?.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id: </span>
              <span className="productInfoValue"> {movie?._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{movie?.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">year:</span>
              <span className="productInfoValue">{movie?.year}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">limit:</span>
              <span className="productInfoValue">{movie?.limit}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Title</label>
            <input type="text" placeholder={movie?.title} />
            <label>Year</label>
            <input type="text" placeholder={movie?.year} />
            <label>Genre</label>
            <input type="text" placeholder={movie?.genre} />
            <label>Limit</label>
            <input type="text" placeholder={movie?.limit} />
            <label>Trailer</label>
            <input type="file" placeholder={movie?.year} />
            <label>Video</label>
            <input type="file" placeholder={movie?.year} />
          </div>
          <div className="productFormRight">
            <div className='productUpload'>
                <img src={movie?.img} alt='' className='productUploadImg' />
                <label for="file">
                    <Publish />
                </label>
                <input type="file" id='file' style={{display: "none"}} />
            </div>
            <button className='productButton'>Update</button>
          </div>
        </form>
      </div>
    </div>
      </div>
    </>
  );
};
