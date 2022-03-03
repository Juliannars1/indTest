import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './Login.css';
import user from "../../const/user.json"


const Login = ()=> {

  let navigate = useNavigate();

  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
 
   function handleLogin(e) {
    e.preventDefault();
    user.users.forEach((item) =>
    {
      if(item.user=== emaillog && item.pass === passwordlog){
        return navigate('/home');
      }
    });
  }

  return (
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
