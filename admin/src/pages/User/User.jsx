import React from 'react';
import './User.css';
import avatar from '../../images/avatar.png';
import { Link } from 'react-router-dom';
import {
  PermIdentity,
  CalendarToday,
  PhoneAndroid,
  MailOutline,
  LocationSearching,
  Publish,
} from '@mui/icons-material';

export const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userDisplay">
          <div className="userDisplayTop">
            <img src={avatar} alt="avatar" className="userDisplayImg" />
            <div className="userDisplayTopTitle">
              <span className="userDisplayUsername">Anna Chong</span>
              <span className="userDisplayTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userDisplayBottom">
            <span className="userDisplayTitle">Account Details</span>
            <div className="userDisplayInfo">
              <PermIdentity className="userDisplayIcon" />
              <span className="userDisplayIntoTitle">annachong</span>
            </div>
            <div className="userDisplayInfo">
              <CalendarToday className="userDisplayIcon" />
              <span className="userDisplayIntoTitle">02.2.2001</span>
            </div>
            <span className="userDisplayTitle">Contact Details</span>
            <div className="userDisplayInfo">
              <PhoneAndroid className="userDisplayIcon" />
              <span className="userDisplayIntoTitle">+61 458782457</span>
            </div>
            <div className="userDisplayInfo">
              <MailOutline className="userDisplayIcon" />
              <span className="userDisplayIntoTitle">annachong@gmail.com</span>
            </div>
            <div className="userDisplayInfo">
              <LocationSearching className="userDisplayIcon" />
              <span className="userDisplayIntoTitle">Sydney, Australia</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="annachong"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="Anna Chong"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="annachong@gmail.com"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="+614528795"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="Sydney, Australia"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src={avatar} alt="avatar" className="userUpdateImg" />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: 'none' }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
