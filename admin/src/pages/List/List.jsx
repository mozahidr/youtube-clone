import React, { useState, useEffect} from 'react';
import './List.css';
import { Link, useLocation } from 'react-router-dom';
import { Publish } from '@mui/icons-material';
import { Navbar, Sidebar } from '../index';
import axios from 'axios';

export const List = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [list, setList] = useState({});

  useEffect(() => {
    const fetchList = async () => {
      const response = await axios.get('/lists/find/' + path, {
        headers: {
          token: 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      setList(response.data);
    }
    fetchList();
  }, [path]);

  
  return (
    <>
    <Navbar />
      <div className="container">
        <Sidebar />
      <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        <Link to="/newList">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
       
        <div className="productTopRight">
          <div className="productInfoTop">        
            <span className="productName">{list?.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id: </span>
              <span className="productInfoValue"> {list?._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{list?.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">type:</span>
              <span className="productInfoValue">{list?.type}</span>
            </div> 
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>List Title</label>
            <input type="text" placeholder={list?.title} />
            <label>Type</label>
            <input type="text" placeholder={list?.type} />
            <label>Genre</label>
            <input type="text" placeholder={list?.genre} />
            <button className='productButton'>Update</button>
          </div>
        </form>
      </div>
    </div>
      </div>
    </>
  );
};
