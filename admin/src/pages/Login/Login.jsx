import React, { useContext, useState } from 'react';
//import './Login.css';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { login } from '../../Context/AuthContext/ApiCalls';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  }

  return (
    <div className="login">
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form className="">
        <h3>Login Here</h3>
        <label for="username">Username</label>
        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

        <button onClick={handleLogin} disabled={isFetching}>Log In</button>
        <div class="social">
          <div class="go">
            <i class="fab fa-google"></i> Google
          </div>
          <div class="fb">
            <i class="fab fa-facebook"></i> Facebook
          </div>
        </div>
      </form>
    </div>
  );
};
