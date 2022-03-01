import React, { useState } from "react";
import { NavLink, useNavigate, Navigate } from "react-router-dom";
import './Login.css';

const Login = ()=> {

  let navigate = useNavigate();

  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

   function handleLogin(e) {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem('user'));
 
    if(user.email=== emaillog && user.password === passwordlog){
      console.log("ingreso al home");
      localStorage.setItem('ingresado','true');
      navigate('/home');
    }
  }

  return localStorage.getItem('ingresado') ? <Navigate to="/home"/> :(
    <div className="form-div-Lg">
      <form className="form-primary" onSubmit={handleLogin} >
          <h3>Log in</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control-input"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control-input"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <button type="submit" className="form-control-btn">
            Login
          </button>
          
          <NavLink to='/register'> 
                Sign in now!
              </NavLink>
        </form>
        
    </div>
  );
}

export default Login;
