import React from 'react';

const Login = props => {
    return (
      <div>
        <h1 className="register"> Welcome to Recipe Finder!</h1>
        <p>If already registered, login in below</p>

        <form>
          <label>Log In: 
          <input type="text" name="username" placeholder="Enter Username..." onChange={props.handleChange} className="login-input"></input>
          </label> <br></br>

          <label>Password: </label>
          <input type="text" name="password" placeholder="Enter Password..." onChange={props.handleChange} className="login-input"></input>

          <button className="login_button" onClick={props.handleClick}>Login</button>
          <button className="login_button" onClick={props.pageViewChange} style ={{margin: "10px"}}>Register Here </button>
    
        </form>
       
      </div>
    )
  }


export default Login;