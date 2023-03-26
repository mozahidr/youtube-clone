import React from 'react';
import './WidgetSm.css';
import avatar from '../../images/avatar.png';
import { Visibility } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const WidgetSm = () => {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getNewUsers();
  }, []);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li className="widgetSmListItem">
          <img src={user.profilePic || avatar} alt="avatar" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon' /> Display
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
};
