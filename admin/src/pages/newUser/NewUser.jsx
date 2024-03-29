import React from 'react';
import './newUser.css';
import { Navbar, Sidebar } from '../index';

export const NewUser = () => {
  return (
    <>
    <Navbar />
      <div className="container">
        <Sidebar />
        <div className="newUser">
          <h1 className="newUserTitle">New User</h1>
          <form className="newUserForm">
            <div className="newUserItem">
              <label>Username</label>
              <input type="text" name="username" placeholder="John" />
            </div>
            <div className="newUserItem">
              <label>Full Name</label>
              <input type="text" name="fullName" placeholder="John Smith" />
            </div>
            <div className="newUserItem">
              <label>Username</label>
              <input type="email" name="email" placeholder="john@gmail.com" />
            </div>
            <div className="newUserItem">
              <label>Password</label>
              <input type="password" name="password" placeholder="John" />
            </div>
            <div className="newUserItem">
              <label>Phone</label>
              <input type="text" name="phone" placeholder="+61 452 457 340" />
            </div>
            <div className="newUserItem">
              <label>Address</label>
              <input
                type="text"
                name="address"
                placeholder="Sydney, Australia"
              />
            </div>
            <div className="newUserItem">
              <label>Gender</label>
              <div className="newUserGender">
                <input type="radio" name="gender" id="male" value="male" />
                <label for="male">Male</label>
                <input type="radio" name="gender" id="female" value="female" />
                <label for="female">Female</label>
                <input type="radio" name="gender" id="other" value="other" />
                <label for="other">Other</label>
              </div>
            </div>
            <div className="newUserItem">
              <label>Active</label>
              <select className="newUserSelect" name="active" id="active">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <button className="newUserButton">Create</button>
          </form>
        </div>
      </div>
    </>
  );
};
