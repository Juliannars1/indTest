import React, { useState } from "react";
//import Login from "../Login/Login";
import { NavLink } from "react-router-dom";
import './Register.css';

const Register =()=> {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);


  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password ) {
      setFlag(true);
    } else {
      setFlag(false);
      const user = {
        name: name,
        email: email,
        password: password,
        ingresado:''
      }
      localStorage.setItem('user', JSON.stringify(user));
      console.log("Saved in Local Storage");
      setLogin(!login);
    }
  }
  return (
    <>
        <div className="form-div-Rg">       
            <form className="form-primary" onSubmit={handleFormSubmit}>
              <h3>Register</h3>

              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control-input"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control-input"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control-input"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <button type="submit" className="form-control-btn">
                Register
              </button>
              <NavLink to='/login'> 
            Already registered log in?
              </NavLink>
            </form>
            
        </div>
    
    </>
  );
}

export default Register;
