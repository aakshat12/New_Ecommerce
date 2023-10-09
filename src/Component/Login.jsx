import React from "react";

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    window.localStorage.setItem("isLogedIn", true)
    axios
      .post("http://localhost:3001/Login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/Home");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {/* <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>

        <label for="username" >Username</label>
        <input type="email"  name="email" placeholder="Email "  onChange={(e) => setEmail(e.target.value)} />

        <label for="password">Password</label>
        <input type="password"  name="pswd" placeholder="Password"  onChange={(e) => setPassword(e.target.value)}/>
        <button>Log In</button>

       
        
      </form> */}
     <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="   bg-white p-3 rounded w-25">
        <h2 className="d-flex justify-content-center align-items-center">Login</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
          </form>
        

      
    </div>
    </div>

   
    </>
  );
};
// export default Login;
